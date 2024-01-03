function inputValidation(event) {
    event.target.value = event.target.value.replace(/[^0-9]/, '').slice(0, 10);
}
document.getElementById('DonGia').addEventListener('input', inputValidation);
function addFigure() {
    var figureCode = document.getElementById("MaFigure").value;
    var figureName = document.getElementById("TenFigure").value;
    var figureType = document.getElementById("LoaiFigure").value;
    var supplier = document.getElementById("NhaCungCap").value;
    var status = document.getElementById("TinhTrang").value;
    var price = document.getElementById("DonGia").value;
    var description = document.getElementById("MoTa").value; // Thêm dòng này
    var image = document.getElementById("image").files[0];

    if (figureCode && figureName && figureType && supplier && status) {
        var figureList = document.getElementById("figure-list");

        var figureItem = document.createElement("tr");
        figureItem.className = "figure-item";

        var checkboxCell = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "figure-checkbox";
        checkboxCell.appendChild(checkbox);

        var codeCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var typeCell = document.createElement("td");
        var supplierCell = document.createElement("td");
        var statusCell = document.createElement("td");
        var priceCell = document.createElement("td");
        var descriptionCell = document.createElement("td"); // Thêm dòng này
        var imageCell = document.createElement("td");

        codeCell.textContent = figureCode;
        nameCell.textContent = figureName;
        typeCell.textContent = figureType;
        supplierCell.textContent = supplier;
        statusCell.textContent = status;
        descriptionCell.innerHTML = description;
        priceCell.textContent = price; // Thêm dòng này

        var imageElement = document.createElement("img");
        imageElement.src = URL.createObjectURL(image);
        imageElement.alt = "Figure Image";
        imageElement.style.maxWidth = "100px";
        imageCell.appendChild(imageElement);

        alert("Nhập thông tin thành công.");

        figureItem.appendChild(checkboxCell);
        figureItem.appendChild(codeCell);
        figureItem.appendChild(nameCell);
        figureItem.appendChild(typeCell);
        figureItem.appendChild(supplierCell);
        figureItem.appendChild(statusCell);
        figureItem.appendChild(priceCell);
        figureItem.appendChild(descriptionCell);
        figureItem.appendChild(imageCell);

        figureList.appendChild(figureItem);

        
        document.getElementById("MaFigure").value = "";
        document.getElementById("TenFigure").value = "";
        document.getElementById("LoaiFigure").value = "";
        document.getElementById("NhaCungCap").value = "";
        document.getElementById("TinhTrang").value = "";
        document.getElementById("DonGia").value = "";
        document.getElementById("MoTa").value = "";
        document.getElementById("image").value = "";

    } else {
        alert("Vui lòng nhập đủ thông tin .");
    }
}


function deleteSelectedFigures() {
    var checkboxes = document.getElementsByClassName("figure-checkbox");
    var figureList = document.getElementById("figure-list");

    for (var i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            figureList.removeChild(checkboxes[i].parentNode.parentNode);
        }
    }
}
