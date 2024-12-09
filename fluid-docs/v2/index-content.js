const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');

// Top-level directory where your MDX files are located
const topLevelDirectory = 'src/pages';

// Output file for the search index
const outputFilePath = 'public/searchIndex.json';

async function buildSearchIndex() {
  try {
    const files = await getMdxFiles(topLevelDirectory);
    const index = await generateIndex(files);
    await saveIndex(index);
    console.log('Search search built successfully!');
  } catch (error) {
    console.error('Error building search search:', error);
  }
}

async function getMdxFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      const subDirectoryFiles = await getMdxFiles(fullPath);
      files.push(...subDirectoryFiles);
    } else if (entry.isFile() && path.extname(entry.name) === '.mdx') {
      files.push(fullPath);
    }
  }

  return files;
}

async function generateIndex(files) {
  const index = [];

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    const { data, content: mdxContent } = matter(content);
    const frontmatter = { ...data };

    // Include any additional frontmatter properties if needed
    // frontmatter.additionalProperty = 'value';

    index.push({
      slug: getSlug(file),
      frontmatter,
      content: mdxContent,
    });
  }

  return index;
}

function getSlug(file) {
  const relativePath = path.relative(topLevelDirectory, file);
  return relativePath.replace('.mdx', '');
}

async function saveIndex(index) {
  await fs.ensureDir(outputFilePath.replace(/\/[^/]+$/, ''));
  await fs.writeJson(outputFilePath, index, { spaces: 2 });
}

buildSearchIndex();
