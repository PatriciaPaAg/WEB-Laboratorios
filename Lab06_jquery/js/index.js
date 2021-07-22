var add = $(".agregar").on("click", addItem);
var check = $(".checar").on("click", checkItem);
var del = $(".del").on("click", delItem);

function addItem(e) {
    e.preventDefault();
    var itemText = $("#newText").val();
    var list = $(".lista");

    var div = $("<div>");
    var li = $("<li>");
    var p = $("<p>");
    var btnChecar = $("<button>");
    var btnDel = $("<button>");

    div.attr("class", "shopItem");
    li.attr("class", "lis");
    p.attr("class", "itemShop");
    btnChecar.attr("class", "checar");
    btnChecar.attr("type", "text");
    btnDel.attr("class", "del");
    btnDel.attr("type", "text");

    p.html(itemText);
    btnChecar.html("check");
    btnDel.html("delete");

    li.append(p);
    li.append(btnChecar);
    li.append(btnDel);
    li.append($("<p>"))
    div.append(li);
    list.append(div);
}

function checkItem() {
    console.log("checkItem function")
    $(".lista").on("click", ".checar", function() {
        $(this).parent().toggleClass("chec");
       // $(this).toggleClass("checar");
        //$(this).toggleClass("noChecar");
    })
}

function delItem() {
    $(".lista").on("click", ".del", function() {
        $(this).parent().parent().remove();
    })
}

checkItem();
delItem();