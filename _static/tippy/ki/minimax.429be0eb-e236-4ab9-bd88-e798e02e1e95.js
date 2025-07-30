selector_to_html = {"a[href=\"#der-minimax-algorithmus\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20. </span>Der Minimax-Algorithmus<a class=\"headerlink\" href=\"#der-minimax-algorithmus\" title=\"Link to this heading\">#</a></h1><h2><span class=\"section-number\">20.1. </span>Einf\u00fchrung<a class=\"headerlink\" href=\"#einfuhrung\" title=\"Link to this heading\">#</a></h2><p>Wenn Computer in Spielen gegen Menschen antreten, z.B. in Schach, Go oder auch nur dem einfachen Tic-Tac-Toe,\ndann m\u00fcssen sie in jeder Runde den bestm\u00f6glichen Zug finden. Daf\u00fcr gibt es verschiedene Algorithmen, die in der K\u00fcnstlichen Intelligenz eingesetzt werden. Der <strong>Minimax-Algorithmus</strong> ist der grundlegende Algorithmus f\u00fcr das Finden des besten Zuges in einem Spiel. Er\nwurde bereits in den 1950er Jahren entwickelt und ist heute noch in vielen Spielen im Einsatz.</p><p>Minimax ist <em>kein</em> Lernverfahren, sondern geh\u00f6rt zur <em>probleml\u00f6senden</em> KI.</p>", "a[href=\"#ubungen\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.2. </span>\u00dcbungen<a class=\"headerlink\" href=\"#ubungen\" title=\"Link to this heading\">#</a></h2><p>Mit <a class=\"reference external\" href=\"https://embee0.github.io/alphabetapruning/\">dieser interaktiven Webseite</a> kannst du Minimax mit Alpha-Beta-Pruning <em>online</em> \u00fcben.</p><p>Wenn du - als Vorbereitung auf die schriftliche Klausur und das Abi - das Verfahren auch <em>auf Papier</em> \u00fcben m\u00f6chtest, dann drucke <a class=\"reference download internal\" download=\"\" href=\"../_downloads/6c48a118eff0ae4d460f6e7084b28305/AB_Minimax_AlphaBeta.pdf\"><span class=\"xref download myst\">die hier verlinkten Aufgaben</span></a> aus.</p>", "a[href=\"#einfuhrung\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.1. </span>Einf\u00fchrung<a class=\"headerlink\" href=\"#einfuhrung\" title=\"Link to this heading\">#</a></h2><p>Wenn Computer in Spielen gegen Menschen antreten, z.B. in Schach, Go oder auch nur dem einfachen Tic-Tac-Toe,\ndann m\u00fcssen sie in jeder Runde den bestm\u00f6glichen Zug finden. Daf\u00fcr gibt es verschiedene Algorithmen, die in der K\u00fcnstlichen Intelligenz eingesetzt werden. Der <strong>Minimax-Algorithmus</strong> ist der grundlegende Algorithmus f\u00fcr das Finden des besten Zuges in einem Spiel. Er\nwurde bereits in den 1950er Jahren entwickelt und ist heute noch in vielen Spielen im Einsatz.</p><p>Minimax ist <em>kein</em> Lernverfahren, sondern geh\u00f6rt zur <em>probleml\u00f6senden</em> KI.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }
            link.classList.add('has-tippy');
            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: false,
                placement: 'auto-start', maxWidth: 500, interactive: true, boundary: document.body, appendTo: document.body,
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {var isFirefox=typeof InstallTrigger!=='undefined';if(isFirefox&&window.MathJax&&MathJax.startup&&MathJax.startup.output&&MathJax.startup.output.name==="SVG"){const svgs=instance.popper.querySelectorAll('svg');svgs.forEach(svg=>{let bbox=svg.getBBox(),x=bbox.x,y=bbox.y,width=bbox.width,height=bbox.height;svg.setAttribute('width',width);svg.setAttribute('height',height);svg.setAttribute('viewBox',`${x} ${y} ${width} ${height}`);});let rescale=0.015;svgs.forEach(svg=>{let bbox=svg.getBBox(),width=bbox.width,height=bbox.height;svg.setAttribute('width',width*rescale);svg.setAttribute('height',height*rescale);});}});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
