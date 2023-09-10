import { OneAI } from "oneai";

export async function fetchSummary(prompt) {
    const oneai = new OneAI(process.env.ONEAI_API, {
        multilingual: {
          enabled: true
      },
    });
      
      
      const pipeline = new oneai.Pipeline(oneai.skills.summarize());

      
    try {
         const response = await pipeline.run(prompt)
         return response.summary.text;
    } catch (error) {
        throw new Error(error.message);
        
    }

       
}