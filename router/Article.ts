import { Router } from "express";
import ArticleModle from "../model/ArticlModel";
import { log } from "console";
import express from 'express';
import { saveArticle,getArticle } from "../database/ArticleDatabase";

const router = Router();

router.post('/', async(req, res) => {
    const article:ArticleModle = req.body;
    res.json(await saveArticle(article));
});

router.get('/', async(req, res) => {
    res.json(await getArticle());
});


export default router;