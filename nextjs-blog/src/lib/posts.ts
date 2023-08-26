import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { extractMatterData } from "./extract-matter-front";
import { IPostData } from "./interfaces/post-data.interface";
import { IPostDataWithHTML } from "./interfaces/post-with-html.interface";
import { removeMdExtension } from "./remove-md-extension";
import {Converter} from "showdown";

const converter = new Converter()
const postsDirectory = path.join(`${process.cwd()}/src/posts`);

export function getSortedPostsData(): IPostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const postsData = allPostsData(fileNames);

  return postsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const id = removeMdExtension(fileName);
    return {
      params: {
        id,
      },
    };
  });
}

export async function getCompletePostData(
  id: string
): Promise<IPostDataWithHTML> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);
  const { date, title } = extractMatterData(data);
  
  const contentHtml = converter.makeHtml(content)

  return {
    id,
    contentHtml,
    matterData: {
      title,
      date,
    },
  };
}

export function allPostsData(fileNames: string[]): IPostData[] {
  return fileNames.map((fileName: string) => {
    const id = removeMdExtension(fileName);

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);
    const { date, title } = extractMatterData(data);

    return {
      id,
      date,
      title,
    };
  });
}
