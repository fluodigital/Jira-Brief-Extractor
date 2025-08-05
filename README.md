# Extract Design Brief from Jira - Figma Plugin

A Figma plugin that extracts structured design briefs from Jira stories using OpenAI's GPT-4 API.

## Features

- Paste raw Jira story text into the plugin
- Generate structured design briefs including:
  - Design Objective
  - Key JTBDs (Jobs to Be Done)
  - Constraints or Dependencies
  - Suggested UI Pattern(s)
  - Acceptance Criteria
- Clean, modern UI with error handling
- TypeScript support with proper type safety

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure OpenAI API Key

1. Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Open `code.ts` and replace `YOUR_OPENAI_API_KEY` with your actual API key:

```typescript
'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // Replace with your actual key
```

### 3. Build the Plugin

```bash
npm run build
```

### 4. Load in Figma

1. Open Figma
2. Go to Plugins > Development > Import plugin from manifest
3. Select the `manifest.json` file from this directory

## Usage

1. Open the plugin in Figma
2. Paste your Jira story text into the text area
3. Click "Generate Design Brief"
4. The plugin will extract and display a structured design brief

## File Structure

```
├── manifest.json      # Plugin configuration
├── code.ts           # Main plugin logic (TypeScript source)
├── code.js           # Compiled JavaScript for Figma
├── ui.html           # Plugin UI interface
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## Development

### Watch Mode

For development with auto-recompilation:

```bash
npm run watch
```

### TypeScript Compilation

The plugin uses TypeScript for type safety. The main logic is in `code.ts` and gets compiled to JavaScript for Figma.

## API Usage

The plugin uses OpenAI's GPT-4o model to analyze Jira text and extract design information. The prompt is structured to extract:

1. **Design Objective**: Clear statement of what needs to be designed
2. **Key JTBDs**: Jobs to be done from the user's perspective
3. **Constraints**: Technical or business limitations
4. **UI Patterns**: Suggested interface patterns or components
5. **Acceptance Criteria**: Specific requirements for completion

## Error Handling

The plugin includes comprehensive error handling for:
- Empty input validation
- API request failures
- Network connectivity issues
- Invalid API responses

## Security Notes

- Store your OpenAI API key securely
- Consider using environment variables for production
- The API key is currently hardcoded - implement proper key management for production use

## License

MIT License - see LICENSE file for details. 