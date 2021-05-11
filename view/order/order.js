var searchParam = (new URL(window.location)).searchParams;
document.querySelector("#order").innerHTML = searchParam.get("orderId");