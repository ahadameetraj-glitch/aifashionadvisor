# Fashion AI Advisor (Vercel-ready)

## Deployment Steps
1. Upload this repo to GitHub (new repository).
2. Import it into Vercel → New Project → GitHub → select repo.
3. Add Environment Variable:
   - `OPENAI_API_KEY` = your API key.
4. Deploy.

### API Usage
Endpoint (POST):
```
/api/fashion-advice
```

Request JSON:
```json
{ "occasion": "wedding", "mood": "joyful", "style": "traditional" }
```

Response JSON:
```json
{ "advice": "AI-generated outfit suggestion..." }
```