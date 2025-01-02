import { getFunc, postFunc } from "./apis.js";

const btn = document.querySelector("button");
const mbti = document.querySelector("#mbti");
const colorCode = document.querySelector("#colorCode");
const body = document.querySelector("body");


btn.addEventListener("click", async() => {
    const param = {
        mbti: mbti.value,
        colorCode: colorCode.value,
        password: "0000",
    }
    if(param.mbti && param.colorCode){
        await postFunc(param);
        location.reload(true);
    }
    else{
        alert("MBTI와 색상코드를 입력해주세요.")
    }
});

async function dataList() {
    const datas = await getFunc();
    const list = datas.results;
    list.forEach((data)=> {
        const registered = makeDiv();
        registered.classList.add("registeredMbti");
        
        registered.style.backgroundColor = `${data.colorCode}`;

        const id = makeDiv();
        id.textContent += `아이디: ${data.id}`;
        registered.append(id);

        const mbti = makeDiv();
        mbti.textContent += `MBTI: ${data.mbti}`;
        registered.append(mbti);

        const color = makeDiv();
        color.textContent += `색상: ${data.colorCode}`;
        registered.append(color);
        
        body.append(registered);
    })
}


function makeDiv() {
    const createdDiv = document.createElement("div");
    return createdDiv;
}

dataList();