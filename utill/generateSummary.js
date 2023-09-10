import { OneAI } from "oneai";

export async function fetchSummary(prompt) {
    const oneai = new OneAI("966bde33-47bf-4564-aadb-26f41dfeffca", {
        multilingual: {
          enabled: true
      }});
      
      const conversation = "";
      
      const pipeline = new oneai.Pipeline(
          oneai.skills.summarize(),
      );
      
      pipeline
        .run(conversation)
        .then((output) => console.log(output))
        .catch((error) => console.error(error));
        
      
}