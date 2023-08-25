export function removeMdExtension(fileName: string) {
  return fileName.replace(/\.md$/, "");
}
