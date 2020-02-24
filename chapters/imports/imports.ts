const app: HTMLElement | null = document.getElementById("app");

app && app.addEventListener("click", async () => {
    try {
        // пример префетча (загрузки в простое и переименованию модуля загружаемого через import)
        const importedFile = await import(
            /*
                webpackChunkName: "export",
                webpackPrefetch: true
             */
            "./export");
        console.log(importedFile);
    } catch (e) {
        console.log("import error ", e);
    }
});
