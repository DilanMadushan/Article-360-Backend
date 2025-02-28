import express from "express";
import { PrismaClient } from "@prisma/client";
import { log } from "console";
import ArticleModle from "../model/ArticlModel";

const articleClient = new PrismaClient();

export const saveArticle = async(article:ArticleModle)=>{
    try{
        const result = await articleClient.article.create({
            data: article
        });
        return result;

    }catch(e){
        console.log(e);
    }
};