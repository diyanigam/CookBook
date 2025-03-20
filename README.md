# 🍳 **CookBook** – AI-Powered Cooking Assistant  

**Redefining Flavour, One <ins>Byte</ins> at a Time**  

---
<img width="1388" alt="image" src="https://github.com/user-attachments/assets/48072486-a2e0-4537-91c7-5500b700c9cf" />


CookBook is an AI-driven cooking assistant that uses **semantic search** and **LLAMA 2 (LoRA fine-tuned)** on a **web-scraped recipe dataset** to suggest personalized recipes. Simply tell the chatbot what ingredients you have or describe the dish you want, and it will generate the perfect recipe for you!  

---
🚀 **Live Demo:** *[Coming Soon – Vercel Deployment]*  

---

## 🌟 **Key Features**  
✔️ **AI-Powered Recipe Suggestions** – Find recipes based on your ingredients or dietary preferences.  
✔️ **Semantic Search for Ingredients** – Uses **Sentence Transformers (MiniLM L6 V2)** to match recipes intelligently.  
✔️ **Fine-Tuned LLAMA 2 Model** – LoRA fine-tuned on a dataset of diverse recipes.  
✔️ **Web-Scraped Recipes Dataset** – Extracted using **BeautifulSoup** from trusted recipe sources.  
✔️ **Full-Stack Web Application** – **React.js (Frontend) + Flask (Backend)** for a smooth experience.  
✔️ **Model Deployment** – Served via **Fast API on Hugging Face** with **Vercel Deployment**.  

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
- **Backend:** Flask API  
- **Deployment:** Vercel (Frontend) & FastAPI (Backend API)  
- **Hugging Face for Model Serving**  

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
| Recipe Search | AI Response |  
|--------------|------------|  
| *[Screenshot]* | *[Screenshot]* |  

---

## 🛠️ **Future Enhancements**  
✅ Improve recipe filtering (e.g., vegetarian, allergy-based)  
✅ Add user authentication & recipe saving  
✅ Allow user to give feedback on recipes  

---

## 👨‍💻 **Contributors**  
- **[Diya Nigam]** – Developer & AI Model Trainer

🔗 **Connect with me:** [LinkedIn](www.linkedin.com/in/diyanigam)  

---

## 📜 **License**  
This project is licensed under the **MIT License** – feel free to fork & improve!  

