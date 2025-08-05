figma.showUI(__html__, { width: 420, height: 500 });

figma.ui.onmessage = async (msg: { type: string; jiraText?: string }) => {
  if (msg.type === 'generate-brief' && msg.jiraText) {
    const jiraText = msg.jiraText;

    const prompt = `You are a Moody's design assistant. Extract the following design inputs from this Jira story:

1. Design Objective
2. Key JTBDs (Jobs to Be Done)
3. Constraints or Dependencies
4. Suggested UI pattern(s)
5. Acceptance Criteria

Text:
"""
${jiraText}
"""`;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // Replace with your OpenAI API key
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 600
        })
      });

      const data = await response.json();
      figma.ui.postMessage({ type: 'result', content: data.choices[0].message.content });
    } catch (error) {
      figma.ui.postMessage({ type: 'error', error: (error as Error).message });
    }
  }
}; 