# 🍳 **CookBook** – AI-Powered Cooking Assistant  

**Redefining Flavour, One <ins>Byte</ins> at a Time**  

---
<img width="1388" alt="image" src="https://github.com/user-attachments/assets/48072486-a2e0-4537-91c7-5500b700c9cf" />


CookBook is an AI-driven cooking assistant that uses **LLAMA 2 (LoRA fine-tuned)** on a **web-scraped recipe dataset** to suggest personalized recipes. Simply tell the chatbot what ingredients you have or describe the dish you want, and it will generate the perfect recipe for you! 

---
🚀 **Live Demo:**  https://cook-book-phi.vercel.app/ 

---

## 🌟 **Key Features**  
✔️ **AI-Powered Recipe Suggestions** – Find recipes based on your ingredients or dietary preferences.  
✔️ **Semantic Search for Ingredients** – Uses **Sentence Transformers (MiniLM L6 V2)** to match recipes intelligently.
✔️ **Fine-Tuned LLAMA 2 Model** – LoRA fine-tuned on a dataset of diverse recipes.
✔️ **LangChain Chat History** – Retains memory for in context dialogues
✔️ **Web-Scraped Recipes Dataset** – Extracted using **BeautifulSoup** from trusted recipe sources.  
✔️ **Full-Stack Web Application** – **React+Vite+Tailwind (Frontend) & FastAPI+ngrok+uvicorn (Backend)** for a smooth experience.  
✔️ **Model Deployment** – Served via **Fast API on Colab** with **Vercel Deployment** (cause its too expensive to deploy this live T-T)

---

## 🔧 **Tech Stack**  

### **Web Scraping & Data Processing**  
- **BeautifulSoup** – Extracts recipes from websites.  
- **Dataset Storage** – Processed and stored as **JSON & PKL** files.  

### **Semantic Search & Encoding**  
- **Sentence Transformer (MiniLM L6 V2)** – Converts text into embeddings.  
- **Cosine Similarity Function** – Matches user queries with the most relevant recipe.  

### **Model & AI Processing**  
- **LLAMA 2 (7B Chat Model)** – Fine-tuned for recipe suggestions.  
- **AutoModelForCausalLM** – Used for natural language generation.  
- **LoRA Fine-Tuning** – Efficient tuning of LLAMA 2 for enhanced chatbot responses.  

### **Full-Stack Development**  
- **Frontend:** React.js + Axios  
- **Backend:** Fast API  
- **Deployment:** Vercel (Frontend) & FastAPI (Backend API)  
- **Colab for Model Serving**  

---

## 🔥 **Project Workflow** 
1️⃣ **User Input:** "Can you guide me to make chicken pasta?"  
2️⃣ **Semantic Search:** Identifies key ingredients (e.g., Chicken, Cheese).  
3️⃣ **Cosine Similarity Matching:** Finds the closest matching recipe.  
4️⃣ **AI Response:** Returns a structured recipe with ingredients & instructions.  

Example response:  
> *"Sure! This Chicken Mac and Cheese recipe is a creamy and comforting dish. You'll need..."*  


<img width="1138" alt="image" src="https://github.com/user-attachments/assets/6d42aaff-ea81-4e24-b37a-3afb3f7c59b3" />

---

## 🚀 **Installation & Usage**  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/diyanigam/CookBook.git
cd CookBook
```

### 2️⃣ Install Backend Dependencies  
```bash
pip install -r backend/requirements.txt
```

### 3️⃣ Start the Flask Backend  
```bash
cd backend
python app.py
```

### 4️⃣ Install Frontend Dependencies  
```bash
cd frontend
npm install
```

### 5️⃣ Run the React Frontend  
```bash
npm start
```

### 6️⃣ Deploy Frontend on Vercel  
```bash
vercel
```

Now, you can access **CookBook** through your deployed Vercel link!  

---

## 📸 **Screenshots**  
![Screenshot2123](https://github.com/user-attachments/assets/64b8a371-b3a2-4a5c-ae44-8bea4d567c62)
![sdfasdf](https://github.com/user-attachments/assets/552a54df-1197-4c5d-b39c-f34b024b594f)
![finally oof](https://github.com/user-attachments/assets/b7249f4d-b9ea-48c8-a658-9e8290082049)
---

## 🛠️ **Future Enhancements**  
✅ Improve recipe filtering (e.g., vegetarian, allergy-based)  
✅ Add user authentication & recipe saving  
✅ Allow user to give feedback on recipes  

---
<div style="display: flex; align-items: center;">
<img src="https://img.shields.io/badge/-HuggingFace-FDEE21?style=for-the-badge&logo=HuggingFace&logoColor=black" />
<img src="https://img.shields.io/badge/langchain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" />
<img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
<img src="https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white" />
<img src="https://img.shields.io/badge/ngrok-140648?style=for-the-badge&logo=Ngrok&logoColor=white" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
<img src="https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=googlecolab&color=525252" />
<img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
<img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
</div>

## 👨‍💻 **Contributors**  
- **[Diya Nigam]** – Developer & AI Model Trainer

🔗 **Connect with me:** [LinkedIn](www.linkedin.com/in/diyanigam)  

---

## 📜 **License**  
This project is licensed under the **MIT License** – feel free to fork & improve!  

