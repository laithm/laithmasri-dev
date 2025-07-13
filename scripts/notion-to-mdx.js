import 'dotenv/config' // Loads .env from root

import fs from 'fs'
import path from 'path'
import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const n2m = new NotionToMarkdown({ notionClient: notion })

// Replace this with the Notion page ID you want to export
const pageId = 'YOUR_NOTION_PAGE_ID'

async function exportToMDX() {
  try {
    const mdblocks = await n2m.pageToMarkdown(pageId)
    const mdString = n2m.toMarkdownString(mdblocks)

    // Optional frontmatter
    const frontmatter = `---
title: "My Notion Export"
date: "${new Date().toISOString()}"
slug: "notion-export"
---

`

    const fullMDX = frontmatter + mdString

    const outputDir = path.join(process.cwd(), 'content', 'blog')
    const outputPath = path.join(outputDir, 'notion-export.mdx')

    // Ensure the output directory exists
    fs.mkdirSync(outputDir, { recursive: true })

    // Write file
    fs.writeFileSync(outputPath, fullMDX)

    console.log(`✅ Exported Notion page to ${outputPath}`)
  } catch (err) {
    console.error('❌ Error exporting Notion page:', err.message)
  }
}

exportToMDX()

