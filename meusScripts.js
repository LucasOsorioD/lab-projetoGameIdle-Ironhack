    let boletos = 0;
    let views = 0;
    let videos = 0;
    let limite = 0;
    let boletoAdd = 1;
    let viewsAdd = 1;
    let entrarEmPiramide = 0;
    let faClube = 0;
    let comprarBotViews = 0;
    let precocomprarBotViews = 100;
    let precoEntrarPiramide = 100;
    let precoCriarFaClube = 100;
    let precoTiToKwai = 10;
    let boletoPrice = 1;
    let menu;
    let quantidadeReset = 0;
    let precoReset = 200;

    setInterval(function(){
        boletos += entrarEmPiramide;
        limite += faClube;
        views += comprarBotViews;
        changeInventory();
        changeMarket();
        projetinhos();
    }, 30000);

    //let boletoPendente = document.getElementById("#boletoPendente")
    //boletoPendente.addEventListener('click', function () {...)
    $("#boletoPendente").click(function(){
        boletos += boletoAdd;
        changeInventory();
        changeMarket();
    });

    //let luxarNasRedes = document.getElementById("#luxarNasRedes")
    //luxarNasRedes.addEventListener('click', function () {...)    
    $("#luxarNasRedes").click(function(){
        if(videos == 0) {
            alert("Voce precisa fazer uma conta no TiToKwai para poder luxar nas Redes Sociais!");
        }else {
            views += viewsAdd;
            changeInventory();
        }
    });

    //let projetinhosParalelos = document.getElementById("#projetinhosParalelos")
    //projetinhosParalelos.addEventListener('click', function () {...)      
    $("#projetinhosParalelos").click(function(){
        if(videos == 0) {
            alert("Voce precisa fazer uma conta no TiToKwai para poder luxar nas Redes Sociais!");
        }else {menu = switchMenu("projetos");
        projetinhos();
    };       
    });

    //let pagar1 = document.getElementById("#pagar1")
    //pagar1.addEventListener('click', function () {...)    
    $("#pagar1").click(function(){
        boletos--;
        limite += boletoPrice;
        changeInventory();
        changeMarket();
    });

    //let pagar10 = document.getElementById("#pagar10")
    //pagar10.addEventListener('click', function () {...)
    $("#pagar10").click(function(){
        boletos-=10;
        limite += boletoPrice * 10;
        changeInventory();
        changeMarket();
    });

    //let pagarAll = document.getElementById("#pagarAll")
    //pagarAll.addEventListener('click', function () {...)
    $("#pagarAll").click(function () {
        limite += boletoPrice * boletos;
        boletos = 0;
        changeInventory();
        changeMarket();
    });

    //let pagarAll = document.getElementById("#pagarAll")
    //pagarAll.addEventListener('click', function () {...)
    $("#recebidos1").click(function(){
        views--;
        limite += boletoPrice;
        changeInventory();
        projetinhos();
    });

    //let pagar10 = document.getElementById("#pagar10")
    //pagar10.addEventListener('click', function () {...)
    $("#recebidos10").click(function(){
        views-=10;
        limite += boletoPrice * 10;
        changeInventory();
        projetinhos();
    });

    //let pagarAll = document.getElementById("#pagarAll")
    //pagarAll.addEventListener('click', function () {...)
    $("#recebidosAll").click(function(){
        limite += boletoPrice * views;
        views = 0;
        changeInventory();
        projetinhos();
    });

    //let entrarEmPiramide = document.getElementById("#entrarEmPiramide")
    //entrarEmPiramide.addEventListener('click', function () {...)
    $("#entrarEmPiramide").click(function(){
        limite -= precoEntrarPiramide;
        entrarEmPiramide++;
        changeInventory();
        changeMarket();
    });

    $("#faClube").click(function(){
        limite -= precoCriarFaClube;
        faClube++;
        changeInventory();
        projetinhos();
    });

    $("#comprarBotViews").click(function(){
        limite -= precocomprarBotViews;
        comprarBotViews++;
        changeInventory();
        projetinhos();
    });

    //let criarContaNoTiToKwai = document.getElementById("#criarContaNoTiToKwai")
    //criarContaNoTiToKwai.addEventListener('click', function () {...)
    $("#criarContaNoTiToKwai").click(function(){
        limite -= precoTiToKwai;
        videos++;
        changeInventory();
        changeMarket();
    });

    //let criarContaNoTiToKwai = document.getElementById("#criarContaNoTiToKwai")
    //criarContaNoTiToKwai.addEventListener('click', function () {...)
    $("#irPagar").click(function(){
        menu = switchMenu("loterica");
        changeMarket();
    });

    //let return = document.getElementById("#return")
    //return.addEventListener('click', function () {...)
    $("#return").click(function(){
        menu = switchMenu("main");
    });

    $("#retornar").click(function(){
        menu = switchMenu("main");
    });


    function changeInventory(){
        $("#limite").html("Crédito no cartão: R$" + limite);

        if(boletos == 1){
            $("#boletos").html("Voce trampou para pagar " + boletos + " boletos.");
        }else{
            $("#boletos").html("Voce trampou para pagar " + boletos + " boletos.");
        }

        if(views > 0){
            $("#views").html("Voce adquiriu " + views + " views em seus posts.");
        }else{
            $("#views").html("");
        }

        if(videos > 0){
            $("#videos").html("Voce possui " + videos + " conta(s) no TiToKwai.");
        }else{
            $("#videos").html("");
        }

        if(entrarEmPiramide > 0){
            $("#piramide").html("Voce participa de " + entrarEmPiramide + " piramide(s).");
        }else{
            $("#piramide").html("");
        }

        if(faClube > 0){
            $("#FasSomente").html("Voce já promoveu seu FansSomente " + faClube + " vez(es).");
        }else{
            $("#FasSomente").html("");
        }
        if(comprarBotViews > 0){
            $("#ComprarBotViews").html("Voce já comprou " + comprarBotViews + " pack(s) de visualizações e likes para seus videos.");
        }else{
            $("#ComprarBotViews").html("");
        }
        if(quantidadeReset > 0){
            $("#escapouPF").html("Voce já conseguiu escapar " + quantidadeReset + " vez(es) da Polícia Federal. Parabens?");
        }else{
            $("#escapouPF").html("");
        }
    };

    function changeMarket(){
        if(boletos > 0){
            $("#pagarAll").css("display", "block");
        }else{
            $("#pagarAll").css("display", "none");
        }
        if(boletos >= 1){
            $("#pagar1").css("display", "block");
        }else{
            $("#pagar1").css("display", "none");
        }
        if(boletos >= 10){
            $("#pagar10").css("display", "block");
        }else{
            $("#pagar10").css("display", "none");
        }

        if(limite >= precoEntrarPiramide){
            $("#entrarEmPiramide").css("display", "block");
        }else{
            $("#entrarEmPiramide").css("display", "none");
        }

        if((limite >= precoTiToKwai) && (videos < 1 )) {
            $("#criarContaNoTiToKwai").css("display", "block");
        }else{
            $("#criarContaNoTiToKwai").css("display", "none");
        }
    };

    function projetinhos() {
        if(views > 0){
            $("#recebidosAll").css("display", "block");
        }else{
            $("#recebidosAll").css("display", "none");
        }
        if(views >= 1){
            $("#recebidos1").css("display", "block");
        }else{
            $("#recebidos1").css("display", "none");
        }
        if(views >= 10){
            $("#recebidos10").css("display", "block");
        }else{
            $("#recebidos10").css("display", "none");
        }
        if(limite >= precoCriarFaClube){
            $("#faClube").css("display", "block");
        }else{
            $("#faClube").css("display", "none");
        }
        if(limite >= precocomprarBotViews){
            $("#comprarBotViews").css("display", "block");
        }else{
            $("#comprarBotViews").css("display", "none");
        }
    };

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        let randomizadorDeMemes = document.getElementsByClassName ('memeRandom');
        let pollRandom = ["https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.6435-9/100087908_1420684734784727_7576697995228348416_n.png?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFr1TldK0jWKJ1UtAO1FSavwDi4BD5kM1HAOLgEPmQzUbmxq9ocAwG9lOY0rAWRxjk&_nc_ohc=42fRynlbm4MAX8dYTrX&_nc_ht=scontent.fcgh9-1.fna&oh=00_AT9Eyq5XURf1mO9An5ieBpuvv0Awihbz7xL6cG44Z93Enw&oe=6227C9D5", "https://extra.globo.com/incoming/19285348-23f-d8f/w448/lasier-colagem.jpg", "https://pbs.twimg.com/media/ENtAzzLW4AECMoW.jpg", "http://2.bp.blogspot.com/-XvLX8lOQ60w/VE_UORSUe2I/AAAAAAAAm0I/0qVREPt8rew/s1600/segura%2Bo%2Bforninho%2Beita%2Bgiovanna%2B(10).jpg", "https://i.kym-cdn.com/entries/icons/mobile/000/015/994/enhanced-28984-1404855514-25.jpg", "https://i.redd.it/ii49iayktzt01.jpg", "https://gcmais.com.br/wp-content/uploads/2022/01/Gravida.jpg", "https://i.pinimg.com/originals/49/28/ca/4928cab448f675e55e1a54702adf02d7.jpg", "https://i0.wp.com/gay.blog.br/wp-content/uploads/2018/03/bons-drinks.jpg?fit=600%2C419&ssl=1", "https://pbs.twimg.com/media/C5SB3uPW8AQ0FY6.jpg", "https://hqscomcafe.com.br/wp-content/uploads/2021/02/Et-Bilu-Busquem-conhecimento.jpg", "https://teleguiado.com/wp-content/uploads/2021/10/Captura-de-Tela-2021-10-09-a%CC%80s-02.52.59.png"]
        let randomIndex = Math.floor(Math.random() * pollRandom.length);
        randomizadorDeMemes[0].src = pollRandom[randomIndex];
        randomizadorDeMemes[1].src = pollRandom[randomIndex];
        return menu;
    };

    function criarBotao (){
        let container = document.createElement("div");
        let img = document.createElement("img");
        let btn = document.createElement("button");
        container.className = "containerReset";
        img.src = "https://jpimg.com.br/uploads/2017/04/1232546088-capa-meme-senhora.jpg";
        img.style="height: 100%; width: 640px;";
        btn.innerHTML = "A PF descobriu seus esquemas de sonegação de imposto! Voce precisa fugir para outra cidade, trocar de nome (quem sabe fazer uma cirurgia?), sorte sua que alguns dos seus investimentos com os laranjas permitiram voce a ter parte dos seus rendimentos de volta.";
        btn.className = "memePrestigio";
        btn.id = "resetarPrestigio";
        document.getElementsByClassName("memeWakeUp")[0].appendChild(container);
        document.getElementsByClassName("containerReset")[0].appendChild(img);
        document.getElementsByClassName("containerReset")[0].appendChild(btn);
        };

    let prestigioReset = setTimeout(criarBotao, 10000);

    function resetPrestige() {
       limite -= precoReset;
       quantidadeReset++;
       boletos = 0;
       views = 0;
       videos = 0;
       limite = 0;
       entrarEmPiramide = entrarEmPiramide / 2;
       faClube = faClube / 2;
       comprarBotViews = comprarBotViews / 2;
       boletoAdd = 1 + (quantidadeReset+0.01)*0.70;
       viewsAdd = 1 + (quantidadeReset+0.01)*0.70;
       precocomprarBotViews = 100;
       precoEntrarPiramide = 100;
       precoCriarFaClube = 100;
       precoTiToKwai = 10;
       boletoPrice = 1;
       menu;
       precoReset = 200 + (quantidadeReset+1)*1.25;
       changeInventory()
    };

    // prestigioReset.addEventListener('click', resetPrestige);

    $("#resetarPrestigio").click(function(){
        resetPrestige()
    });