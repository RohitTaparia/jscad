# OTM Assitant

### STARTING FRONTEND

Just install the zip file and import in your ALM workspace. Click on Run.

### STARTING BACKEND

1. Create virtualenv

```
python3 -m venv .venv && source .venv/bin/activate
```

2. Install packages

```
pip install -r requirements.txt
```

3. Environment variables

env variables are in .env (All API keys- Groq, Qdrant etc.)

4. Run the server

```
python3 index.js
```

5. The body of the request looks like this. (No authentication required)

```
{
    "query": "What does the Bulk manager do in OTM"
}
```