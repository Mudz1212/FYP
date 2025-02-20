import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:
    "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",
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [{ role: "user", content: "write a haiku about ai" }],
});

completion.then((result) => console.log(result.choices[0].message));
