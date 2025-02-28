import { Router } from "express";
import ArticleModle from "../model/ArticlModel";
import { log } from "console";
import express from 'express';
import { saveArticle,getArticle, getArticleByTitle,updateArticle } from "../database/ArticleDatabase";

const router = Router();

router.post('/', async(req, res) => {
    const article:ArticleModle = req.body;
    res.json(await saveArticle(article));
});

router.get('/', async(req, res) => {
    res.json(await getArticle());
});

router.get('/:title', async(req, res) => {
    const title = req.params.title;
    console.log(title);
    
    res.json(await getArticleByTitle(title));
});

router.put('/', async(req, res) => {
    const article:ArticleModle = req.body;
    res.json(await updateArticle(article));
});

export default router;