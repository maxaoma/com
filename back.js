document.body.insertAdjacentHTML("beforeend", `
    <button id="backBtn">Back</button>

    <style>
        #backBtn {
            position: fixed;
            right: 2vw;
            top: 2vh;
            height: 3vh;
            aspect-ratio: 22/5;
            background: rgba(55,155,157,.8);
            border: none;
            color: #fff;
            font-size: 1vh;
            display: none;
        }

        #backBtn:active {
            opacity: .5;
        }
    </style>
`);

const backBtn = document.getElementById("backBtn");

// Haddii history jiro → show
if (window.history.length > 1) {
    backBtn.style.display = "block";
}

// Back
backBtn.addEventListener("click", () => {
    window.history.back();
});

function checkHistory() {
    backBtn.style.display =
        window.history.length > 1 ? "block" : "none";
}

checkHistory();

window.addEventListener("popstate", checkHistory);