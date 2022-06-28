function addItem(event) {
    event.preventDefault();
    // console.log(event);
    var text = document.getElementById('ItemName').value;
    var time = document.getElementById('ExpiredDate').value;

    db.collection("itemList").add({
        Date: time,
        ItemName: text
    })
}
function getItems() {
    db.collection("itemList").onSnapshot((snapshot) => {
        // console.log(snapshot);
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            });
        })
        generateItem(items);
        // console.log(items);
    })
}

function generateItem(items) {

    var itemsHTML = "";
    items.forEach((item) => {
        var today = new Date();
        var day = today.getDate();
        // if (day < 10) day = '0'+ day;
        var month = parseInt(today.getMonth() + 1);
        // if (month < 10) month = '0'+ month;
        var year = parseInt(today.getFullYear());
        // console.log(day + " " + month + " " + year);
        // setInterval(countdown,1000);
        let Year = parseInt(item.Date.substring(0, 4))
        let Month = parseInt(item.Date.substring(5, 7))
        let Day = parseInt(item.Date.substring(8, 10))
        var d1 = new Date(year + "/" + month + "/" + day);
        var d2 = new Date(Year + "/" + Month + "/" + Day);
        var diff = d2.getTime() - d1.getTime();
        diff /= (1000 * 60 * 60 * 24);
        var dif = parseInt(diff);
        console.log(dif)

        if (d2.getTime() > d1.getTime()) {
            let cur = 0;
            while (year < Year) {
                if (year + 1 === Year) {
                    if (month > Month || (Month === month && day > Day)) break;
                }
                if (Year % 4 === 0 && Year % 100 !== 0 || Year % 400 === 0) dif = dif - 366;
                else dif = dif - 365;
                console.log(dif);
                cur++;
                year++;
            }
            itemsHTML += `
            <div id="Item">
                <div id="IName">
                    ${item.ItemName}
                </div>
                <div id="exp-date">
                    ${item.Date}
                </div>
                <div class="countdown">
                    <div class="container-year">
                        <p class="year">${cur}</p>
                        <p>Year</p>
                    </div>
                    <div class="container-week">
                        <p class="week">${parseInt(dif / 7)}</p>
                        <p>Week</p>
                    </div>
                    <div class="container-day">
                        <p class="day">${dif % 7}</p>
                        <p>Day</p>
                    </div>
                </div>
                <button class="bad-btn" onclick="deleteItem('${item.id}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            `
        } else {
            console.log("Item is Expired")
        }
    })
    // console.log(itemsHTML);
    document.querySelector("#Items-List").innerHTML = itemsHTML;
}

getItems();

function deleteItem(id) {
    db.collection("itemList").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}