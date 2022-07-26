"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrap = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
class Scrap {
    constructor(url) {
        this.url = url;
    }
    scrappAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const browser = yield puppeteer_1.default.launch();
                const page = yield browser.newPage();
                yield page.goto(this.url);
                let data = yield page.evaluate(() => {
                    let results = [];
                    let items = document.querySelectorAll(".item_annonce");
                    items.forEach((item) => {
                        const currentItem = item.querySelector(".contenu_annonce > h3 > a");
                        results.push({
                            title: item ? currentItem.innerText : "",
                        });
                    });
                    return results;
                });
                yield browser.close();
                return data;
            }
            catch (error) {
                console.log("error from puppeteer : ", error);
            }
        });
    }
}
exports.Scrap = Scrap;
