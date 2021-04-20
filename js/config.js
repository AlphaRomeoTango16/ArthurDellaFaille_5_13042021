async function loadConfig () {
    let config = await fetch("../../config.json");
    return config.json();
}