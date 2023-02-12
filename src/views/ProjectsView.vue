<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import Project from "../services/projects";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

export default {
    name: 'app',
    components: {
        Radar
    },
    data() {
        return {
            Project: {
                id: '',
                name: '',
                imagem: '',
            },
            Projects: [],
            errors: [],
            urlProject: [],
            data: {
                labels: ['Javascript', 'PHP', 'Java', 'C', 'Python', 'HTML/CSS', 'SQL', 'NoSQL'],
                datasets: [{
                    label: 'Linguagens',
                    data: [80, 70, 90, 80, 60, 100, 100, 75],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: '#000000',
                    pointBackgroundColor: '#008000',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#008000',
                    pointHoverBorderColor: 'rgb(54, 162, 235)',
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: "#000000",
                            font: { size: 12, weight: 500 }
                        }
                    },
                },
                scales: {
                    r: {
                        suggestedMin: 10,
                        suggestedMax: 100
                    },
                },
            },
        }
    },
    mounted() {
        this.listar()
    },
    methods: {
        listar(id) {
            Project.listar().then(resposta => {
                this.Projects = resposta.data.items;
            }).catch(e => {
            })
        },
        FormataStringData(data) {
            var ano = data.split("-")[0];
            var mes = data.split("-")[1];
            return mes + '/' + ano;
        },
    }
};
</script>

<template>
    <scroll-container>
        <div class="displayPage" style="position: fixed; right: 20px; top: 45%; display: grid;">
            <a class="linkpage" href="/projects/#page-1">
                1
            </a>
            <a class="linkpage" href="projects/#page-2">
                2
            </a>
            <a class="linkpage" href="https://cleitondcarmo.github.io/#/projects/#page-3">
                3
            </a>
        </div>
        <scroll-page id="page-1">
            <div class="titulosH1">
                <h1 class="titulos">HABILIDADES</h1>
            </div>
            <div style="height: calc(100% - 30px);">
                <scroll-container>
                    <scroll-page>
                        <div class="containerPage1">
                            <div class="blocosSkills" style="text-align: center">
                                <p class="subtitulo">Conhecimento</p>
                                <div class="divCanvas" style="">
                                    <Radar :data="data" :options="options" />
                                </div>
                            </div>
                            <div class="blocosSkills" style="width: 300px; height: 100%;">
                                <div class="lista">
                                    <p class="subtitulo">Soft Skills</p>
                                    <ul>
                                        <li>Empatia</li>
                                        <li>Comunicação</li>
                                        <li>Flexibilidade</li>
                                        <li>Autodidata</li>
                                        <li>Organização</li>
                                        <li>Proatividade</li>
                                        <li>Resiliência</li>
                                        <li>Liderança</li>
                                        <li>Inteligência emocional</li>
                                        <li>Pensamento crítico</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="blocosSkills" style="text-align: center; margin-top: 100px;  height: 135px;">
                                <div>
                                    <p class="subtitulo">Experiência</p>
                                    <div
                                        style="display: flex; flex-wrap: wrap;  justify-content: center; text-align: center;">
                                        <div class="divFramework">
                                            <img src="../assets/img/vue.svg" alt="Vue">
                                            <p>VueJs</p>
                                        </div>
                                        <div class="divFramework">
                                            <img src="../assets/img/quasar.svg" alt="quasar">
                                            <p>Quasar</p>
                                        </div>
                                        <div class="divFramework">
                                            <img src="../assets/img/javascript.svg" alt="javascript">
                                            <p>Javascript</p>
                                        </div>
                                        <div class="divFramework">
                                            <img src="../assets/img/css3.svg" alt="css">
                                            <p>CSS3</p>
                                        </div>
                                        <div class="divFramework">
                                            <img src="../assets/img/html5.svg" alt="html">
                                            <p>HTML5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="blocosSkills" style="margin-top: 100px;  height: 135px;">
                                <p class="subtitulo">Frameworks & Bibliotecas</p>
                                <div style="display: flex; justify-content: space-around;">
                                    <div class="divFramework">
                                        <img src="../assets/img/vue.svg" alt="Vue">
                                        <p>VueJs</p>
                                    </div>
                                    <div class="divFramework">
                                        <img src="../assets/img/react.svg" alt="React">
                                        <p>React</p>
                                    </div>
                                    <div class="divFramework">
                                        <img src="../assets/img/laravel.svg" alt="Laravel">
                                        <p>Laravel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </scroll-page>
                </scroll-container>
            </div>
        </scroll-page>

        <scroll-page id="page-2">
            <div class="titulosH1">
                <h1 class="titulos">PRINCIPAIS PROJETOS</h1>
            </div>
            <div style="height: calc(100% - 60px);">
                <scroll-container>
                    <scroll-page>
                        <div class="divPrincipalProject">
                            <div class="principalProject">
                                <div class="divTitulo">
                                    <div style="width: 50%;">
                                        <p>Meny</p>
                                    </div>
                                    <div style="width: 50%;">
                                        <a class="btnVerPrincipais" target="_blank"
                                            href="https://github.com/cleitondcarmo/Meny">Ver no Github</a>
                                    </div>
                                </div>
                                <div class="divAboutProject">
                                    <div class="imgProject">
                                        <div class="divImgMeny" style="margin: 20px;">
                                            <img class="imgPrincipalProject" src="../assets/img/project-meny-img_1.jpeg"
                                                alt="Imagem 1 projeto Meny">
                                        </div>
                                        <div class="divImgMeny" style="margin: 20px;">
                                            <img class="imgPrincipalProject" src="../assets/img/project-meny-img_2.jpeg"
                                                alt="Imagem 2 projeto Meny">
                                        </div>
                                    </div>
                                    <div class="descProject">
                                        <div class="descProject2">
                                            <p><span class="atributos">Nome: </span>Meny</p>
                                            <p><span class="atributos">Criado em: </span>12/2022</p>
                                            <p><span class="atributos">Linguagem: </span>Java</p>
                                            <p><span class="atributos">Bibliotecas: </span>ZXing</p>
                                            <p><span class="atributos">Armazenamento: </span>Firebase, SQLite</p>
                                            <p><span class="atributos">IDE: </span>Android Studio</p>
                                            <p><span class="atributos">Plataforma: </span>Android</p>
                                        </div>
                                        <div class="descProject2">
                                            <p>
                                                O projeto Meny se trata de uma aplicação voltada para o ramo de
                                                refeição, que torna possível
                                                os usuários terem perfis de empresa e cliente, negociando entre si, como
                                                um delivery.
                                                Meny foi desenvolvido durante a disciplina de Dispositivos Moveis no
                                                Instituto Federal Baiano - Campus Guanambi
                                                e obteve a nota máxima.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="principalProject">
                                <div class="divTitulo">
                                    <div style="width: 50%;">
                                        <p>CPC</p>
                                    </div>
                                    <div style="width: 50%;">
                                        <a class="btnVerPrincipais" target="_blank"
                                            href="https://github.com/cleitondcarmo/Calculadora-de-precos-para-churros">Ver
                                            no Github</a>
                                    </div>
                                </div>
                                <div class="divAboutProject">
                                    <div class="imgProject">
                                        <div class="divImgPrincipais">
                                            <img style="width: 100%; height: 280px;"
                                                src="../assets/img/project-cpc-img_1.jpeg" alt="Imagem 1 projeto Meny">
                                        </div>
                                    </div>
                                    <div class="descProject">
                                        <div class="descProject2">
                                            <p><span class="atributos">Nome: </span>CPC</p>
                                            <p><span class="atributos">Criado em: </span>12/2021</p>
                                            <p><span class="atributos">Linguagem: </span>Java</p>
                                            <p><span class="atributos">Bibliotecas: </span>Nenhum</p>
                                            <p><span class="atributos">Armazenamento: </span>Local</p>
                                            <p><span class="atributos">IDE: </span>Eclipse</p>
                                            <p><span class="atributos">Plataforma: </span>PC</p>
                                        </div>
                                        <div class="descProject2">
                                            <p>
                                                O “CPC” (Cálculo de Preços para Churros) é uma aplicação com o objetivo
                                                de indicar a estimativa de
                                                custo de produção e do valor ideal de venda de Churros.
                                                CPC calcula a mão de obra, ingredientes, encargos e lucro escolhido pelo
                                                usuário. O projeto
                                                foi criado durante a disciplina de Programas Orientados a Objetos no
                                                Instituto Federal Baiano
                                                e obteve a nota 9/10.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="principalProject">
                                <div class="divTitulo">
                                    <div style="width: 50%;">
                                        <p>Web2-2021.1</p>
                                    </div>
                                    <div style="width: 50%;">
                                        <a class="btnVerPrincipais" target="_blank"
                                            href="https://github.com/cleitondcarmo/web2-2021.1">Ver no Github</a>
                                    </div>
                                </div>
                                <div class="divAboutProject">
                                    <div class="imgProject">
                                        <div class="divImgPrincipais">
                                            <img style="width: 100%; height: 280px;"
                                                src="../assets/img/project-web2-img_1.jpeg"
                                                alt="Imagem 1 projeto Web 2">
                                        </div>
                                    </div>
                                    <div class="descProject">
                                        <div class="descProject2">
                                            <p><span class="atributos">Nome: </span>Web2-2021.1</p>
                                            <p><span class="atributos">Criado em: </span>12/2021</p>
                                            <p><span class="atributos">Linguagens: </span>PHP (Laravel), HTML5, CSS3</p>
                                            <p><span class="atributos">Bibliotecas: </span>Nenhum</p>
                                            <p><span class="atributos">Armazenamento: </span>Postgresql</p>
                                            <p><span class="atributos">IDE: </span>Visual Studio Code</p>
                                            <p><span class="atributos">Plataforma: </span>PC/Mobile</p>
                                        </div>
                                        <div class="descProject2">
                                            <p>
                                                Web2-2021.1 é uma aplicação de gestão e comércio online, onde é possivel
                                                a compra e venda de
                                                produtos e atualização automática do estoque no banco de dados.
                                                O sistema foi desenvolvido durante a disciplina Web 2 no Instituto
                                                Federal Baiano - Campus Guanambi
                                                e obteve a nota máxima.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="principalProject">
                                <div class="divTitulo">
                                    <div style="width: 50%;">
                                        <p>TCC</p>
                                    </div>
                                    <div style="width: 50%;">
                                        <a class="btnVerPrincipais" target="_blank"
                                            href="https://doi.org/10.29327/4164411">Ver Artigo</a>
                                    </div>
                                </div>
                                <div class="divAboutProject">
                                    <div class="imgProject">
                                        <div class="divImgPrincipais">
                                            <img style="width: 100% !important; height: 280px;" src="../assets/img/project-tcc-img_1.png"
                                                alt="Imagem 1 projeto Web 2">
                                        </div>
                                    </div>
                                    <div class="descProject">
                                        <div class="descProject2">
                                            <p><span class="atributos">Nome: </span>Acesso a utilização de tecnologia na
                                                educação em tempos de pandemia de Covid-19</p>
                                            <p><span class="atributos">Criado em: </span>12/2021</p>
                                            <p><span class="atributos">Tipo: </span>Trabalho de conclusão de curso</p>
                                            <p><span class="atributos">Banca: </span>MSc. João P. B. Glória, Dr. Naidson
                                                C. S. Ferreira, Dra. Bárbara K. A. B. Lessa</p>
                                            <p><span class="atributos">Doi: </span>
                                                <a href="https://doi.org/10.29327/4164411">
                                                    <img src="https://publicacoes.even3.com.br/badge/doi?c=10.29327/4164411">
                                                </a>
                                            </p>
                                        </div>
                                        <div class="descProject2">
                                            <p>
                                                Este artigo é um estudo que analisa a relação aluno-professor utilizando a tecnologia como principal ferramenta para as aulas remotas durante o distanciamento social na pandemia da Covid-19. Este estudo foi realizado durante a disciplina TCC 1 e TCC 2 no Instituto Federal Baiano - Campus Guanambi e obteve a nota 9.2.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </scroll-page>
                </scroll-container>
            </div>
        </scroll-page>

        <scroll-page id="page-3">
            <div class="titulosH1">
                <h1 class="titulos">TODOS PROJETOS</h1>
            </div>
            <scroll-container>
                <scroll-page>
                    <div class="todosProjetos">
                        <div class="divProjeto" v-for="Project of Projects" :key="Project.id">
                            <div class="infoProject">
                                <p><span class="atributos">Nome: </span>{{ Project.name }}</p>
                                <p><span class="atributos">Criado em: </span>{{ FormataStringData(Project.created_at) }}
                                </p>
                                <p><span class="atributos">Linguagem: </span>{{ Project.language }}</p>
                            </div>
                            <div class="buttonProject">
                                <a class="btnVer" target="_blank" :href="Project.html_url">Ver no Github</a>
                            </div>
                        </div>
                    </div>
                </scroll-page>
            </scroll-container>
        </scroll-page>
    </scroll-container>
</template>
<style>
body {
    max-width: 100% !important;
    min-width: 100% !important;
}

.linkpage {
    text-decoration: none;
    color: white;
    width: 25px;
    height: 25px;
    text-align: center;
    margin: 2px;
    border-radius: 10%;
    border: 1px solid red;
}

.linkpage:hover {
    text-decoration: none;
    color: green;
    background-color: #fff;
}

.titulos {
    width: 100% !important;
    text-align: center;
    color: rgb(253, 253, 253);
    animation: flicker 1.5s infinite alternate;
    font-size: 25px;
}

@keyframes flicker {

    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
        text-shadow:
            0 0 0px #fff,
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px green,
            0 0 20px green,
            0 0 25px green,
            0 0 30px green,
            0 0 35px green;
    }

    20%,
    24%,
    55% {
        text-shadow: none;
    }
}

.divTitulo {
    color: rgb(0, 255, 76);
    font-size: 20px;
    margin-left: 10px;
    font-weight: 600;
    border-bottom: white solid 1px;
    display: flex;
}

.titulosH1 {
    width: 100%;
    padding: 10px 0px;
}

.subtitulo {
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    color: white;
}

.btnVerPrincipais {
    float: right;
    width: 115px;
    height: 30px;
    border: 1px solid green;
    background-color: rgb(61, 206, 61);
    border-radius: 5px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
}

#page-1 {
    background-image: url(../assets/img/background6.jpeg);
    height: 100%;
    border-bottom: 3px solid rgb(255, 0, 0);
    padding-bottom: 20px;
}

.containerPage1 {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    justify-content: center;
}

canvas {
    display: inline !important;
    height: 250px !important;
    width: 250px !important;
    align-items: center;
    justify-content: center;
    margin: 0px;
    padding: 0px;
}

.divCanvas {
    text-align: center;
    background-color: aliceblue;
    width: 310px;
    height: 310px;
    border-radius: 350px;
    padding: 20px 10px 10px 10px;
    border: 2px solid green;
}

.blocosSkills {
    height: 100%;
    display: block;
    align-items: center;
    justify-content: center;
    margin: auto;
}

.lista li::marker {
    content: "► ";
}

ul {
    background: rgb(70, 160, 70);
    padding: 2px 2px 2px 20px;
    border-radius: 10px;
    width: 100%;
}

ul li {
    background: #cce5ff;
    color: black;
    margin: 5px;
}

li {
    padding: 0px 5px;
    font-weight: 600;
}

.divFramework {
    margin: 5px 10px;
    text-align: center;
    color: white;
}

.divFramework img {
    width: 50px;
    height: 50px;
}

#page-2 {
    background-image: url(../assets/img/background6.jpeg);
    border-bottom: 3px solid rgb(255, 0, 0);
    padding-bottom: 30px;
}

.divPrincipalProject {
    width: calc(100% - 80px);
    height: calc(100% - 100px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
    margin: 0px 40px;
}

.divImgPrincipais {
    margin: 10px;
    min-width: 100%;
    max-width: 520px;
}

.principalProject {
    background-color: rgba(0, 0, 0, 0.5);
    width: calc(100% - 20px);
    height: auto;
    margin-bottom: 20px;
    padding: 10px 40px;
    display: grid;
    grid-template-rows: 40px calc(100% - 40px);
}

.divAboutProject {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.imgProject {
    display: flex;
    width: 50%;
    height: 300px;
}

.imgPrincipalProject {
    width: 235px;
    height: 100%;
}

.descProject {
    display: flex;
    flex-wrap: wrap;
    width: auto;
    height: 300px;
    justify-content: space-around;
}

.descProject2 {
    width: 250px;
    height: 300px;
    margin: 10px 0px 0px 10px;
    padding: 0px 0px 0px 10px;
}

.descProject2 p {
    margin: auto;
    color: white;
    text-align: justify;
}

#page-3 {
    background-image: url(../assets/img/background6.jpeg);
    width: 100%;
    display: grid;
    padding-bottom: 30px;
}

::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
}

scroll-container {
    width: 100%;
    overflow-y: scroll;
    display: block;
    height: 100%;
    scroll-behavior: smooth;
}

scroll-page {
    display: block;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.todosProjetos {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 50px;
    width: calc(100% - 100px);
    height: 100%;
    margin: auto;
}

.divProjeto {
    border: 2px solid green;
    border-radius: 10px;
    width: 250px;
    height: 170px;
    margin: 0px 10px 20px 10px;
    padding: 10px;
    display: grid;
    grid-template-rows: 90px 50px;
}

.divProjeto p {
    margin: 0px;
    color: white;
}

.atributos {
    font-weight: 700;
    color: rgb(200, 243, 135);
}

.buttonProject {
    width: calc(100% - 10px);
    margin: 20px 5px 0px 5px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btnVer {
    margin: auto;
    width: calc(100% - 10px);
    height: 30px;
    border: 1px solid green;
    background-color: rgb(61, 206, 61);
    border-radius: 5px;
    text-decoration: none;
    color: black;
    font-weight: 600;
}

.btnVer:hover,
.btnVerPrincipais:hover {
    margin: auto;
    text-decoration: none;
    color: black;
    box-shadow: 2px solid black;
    background-color: green;
}


@media (max-width: 300px) {
    .titulos {
        font-size: 16px !important;
    }

    canvas {
        width: 250px !important;
        height: 250px !important;
        font-size: 10px !important;
    }

    .divCanvas {
        border-radius: 20% !important;
        width: 270px !important;
        height: 280px !important;
    }

    .divFramework {
        font-size: 10px !important;
    }

    .divFramework img {
        width: 20px !important;
        height: 20px !important;
    }

    .descProject2 {
        font-size: 10px !important;
    }
}

@media (max-width: 399px) {
    .titulos {
        font-size: large;
    }

    .containerPage1 {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
    }

    #page-2 {
        padding: 10px 0px;
    }

    .blocosSkills {
        margin-bottom: 20px !important;
        margin-top: 0px !important;
    }

    .divFramework img {
        width: 30px;
        height: 30px;
    }

    .divFramework {
        font-size: 12px;
    }

    .displayPage {
        display: none !important;
    }

    .divPrincipalProject {
        margin: auto;
        width: calc(100% - 4px);
    }

    .principalProject {
        width: 100%;
        margin: 10px 0px;
        padding: 4px;
    }

    .descProject {
        width: 100% !important;
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .descProject2 {
        font-size: 12px;
        margin: 0px;
        padding: 4px;
        width: 100%;
    }

    .divTitulo,
    .divAboutProject {
        max-width: calc(100% - 8px) !important;
        min-width: calc(100% - 8px) !important;
        margin: 0px 4px;
    }

    .imgProject {
        width: 100%;
        height: 200px;
        margin: auto;
        justify-content: center;
    }

    .divImgPrincipais img,
    .divImgMeny img {
        height: 100% !important;
    }

    .divImgMeny {
        margin: 4px !important;
    }

    .imgPrincipalProject {
        min-width: 100%;
        max-width: 100%;
    }

    .todosProjetos {
        margin: 4px;
        width: calc(100% - 8px);
        padding: 0px 0px 20px 0px;
        justify-content: center;
        font-size: 12px;
    }

    .divProjeto {
        width: 150px;
    }

    #page-3 {
        padding: 0px 0px 20px 0px;
    }
}

@media (min-width: 400px) and (max-width: 619px) {
    .titulos {
        font-size: 20px;
    }

    .containerPage1 {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
    }

    #page-2 {
        padding: 10px 0px;
    }

    .blocosSkills {
        margin: 40px !important;
    }

    .divFramework img {
        width: 30px;
        height: 30px;
    }

    .divFramework {
        font-size: 14px;
    }

    .displayPage {
        display: none !important;
    }

    .divPrincipalProject {
        margin: auto;
        width: calc(100% - 4px);
    }

    .principalProject {
        width: 100%;
        margin: 10px 0px;
        padding: 4px;
    }

    .descProject {
        width: 100% !important;
        max-width: 500px;
        display: grid;
        margin: auto;
        grid-template-columns: 50% 50%;
    }

    .descProject2 {
        font-size: 14px;
        margin: 0px;
        padding: 4px;
        width: 100%;
    }

    .divTitulo,
    .divAboutProject {
        max-width: calc(100% - 8px) !important;
        min-width: calc(100% - 8px) !important;
        margin: 0px 4px;
    }

    .imgProject {
        width: 100%;
        margin: auto;
        justify-content: center;
    }

    .divImgMeny {
        margin: 4px !important;
    }

    .imgPrincipalProject {
        min-width: 100%;
        max-width: 100%;
    }

    .todosProjetos {
        margin: 4px;
        width: calc(100% - 8px);
        padding: 0px;
        justify-content: center;
        font-size: 14px;
    }

    .divProjeto {
        width: 170px;
    }
}

@media (min-width: 620px) and (max-width: 1125px) {
    .titulos {
        font-size: 25px;
    }

    .containerPage1 {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
    }

    .blocosSkills {
        margin: 20px !important;
    }

    .titulos {
        width: 100% !important;
    }

    .displayPage {
        display: none !important;
    }

    .divPrincipalProject {
        margin: auto;
        width: calc(100% - 10px);
    }

    .principalProject {
        width: 100%;
        margin: 10px 0px;
        padding: 10px;
    }

    .divAboutProject {
        width: 100%;
    }

    .descProject {
        margin: auto;
    }

    .descProject2 {
        margin: 5px;
    }

    .imgProject {
        width: 100%;
        max-width: 520px;
        margin: auto;
        justify-content: center;
    }

    .divImgPrincipais {
        margin: auto;
    }

    .todosProjetos {
        margin: 5px;
        width: calc(100% - 10px);
        padding: 0px;
        justify-content: center;
    }
}

@media (min-width: 1126px) and (max-width: 1269px) {
    .displayPage {
        display: none !important;
    }

    .titulos {
        padding: 10px;
    }

    .divPrincipalProject {
        margin: auto;
        width: calc(100% - 10px);
    }

    .principalProject {
        width: 100%;
        margin: 10px 0px;
        padding: 10px;
    }

    .divAboutProject {
        width: 100%;
    }

    .descProject {
        margin: auto;
    }

    .descProject2 {
        margin: 5px;
    }

    .imgProject {
        width: 100%;
        max-width: 520px;
        margin: auto;
        justify-content: center;
    }

    .divImgPrincipais {
        margin: auto;
    }
}

@media (min-width: 1269px) {
    .divImgMeny {
        margin: 18px !important;
    }

    .divImgPrincipais img {
        max-width: 510px;
    }
}
</style>

