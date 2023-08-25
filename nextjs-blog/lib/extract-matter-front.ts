
export function extractMatterData(content: { [key: string]: any }) {
    const { title, date } = content;
    return {
      title,
      date,
    };
  }