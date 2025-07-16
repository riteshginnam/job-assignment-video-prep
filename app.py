from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])  
API_KEY = "AIzaSyDZAoSne2I4oh2D61rfUVvkB-m6LVKFJVg"
if not API_KEY:
    raise ValueError("API_KEY environment variable not set.")

genai.configure(api_key=API_KEY)

@app.route('/generate-script', methods=['POST'])
def generate_script():
    data = request.get_json()

    prompt_context = data.get('promptContext', '').strip()
    user_input = data.get('userInput', '').strip()

    if not user_input or not prompt_context:
        return jsonify({'error': 'Missing promptContext or userInput'}), 400

    prompt = f"""
{prompt_context}

Here are the applicant's notes:
---
{user_input}
---

Please generate the script now. Write only the script content, without any introductory phrases like "Here is the script:".
"""

    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt)

        script_text = ""
        if hasattr(response, 'parts') and response.parts:
            script_text = "\n".join(part.text for part in response.parts if part.text)
        else:
            return jsonify({'error': 'Empty response from Gemini API'}), 500

        return jsonify({'script': script_text.strip()})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
