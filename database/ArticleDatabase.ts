import express from "express";
import { PrismaClient } from "@prisma/client";
import { log } from "console";
import ArticleModle from "../model/ArticlModel";

const articleClient = new PrismaClient().article;

export const saveArticle = async(article:ArticleModle)=>{
    try{
        const result = await articleClient.create({
            data: article
        });
        return result;

    }catch(e){
        console.log(e);
    }
};

export const getArticle = async()=>{
    try{
        const result :ArticleModle[] = await articleClient.findMany();
        return result;
    }catch(e){
        console.log(e);
    }
}

export const getArticleByTitle = async (title: string) => {
    try {
        const result  = await articleClient.findFirst({
            where: {
                title: title
            }
        });
        return result;
    } catch (e) {
        console.error("Error fetching article:", e);
        return null;
    }
};

export const updateArticle = async(article:ArticleModle)=>{
    try{
        await articleClient.updateMany({
            where: {
                title: article.title
            },
            data: article
        });
        const articles  = await articleClient.findFirst({
            where: {
                title: article.title
            }
        });
        return articles;
    }catch(e){
        console.log(e);
    }
}
