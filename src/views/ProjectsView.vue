<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import Project from "../services/projects";
/* import { CCarousel, CCarousel } from '@coreui/vue';
 */import {
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
                    label: 'Conhecimento em linguagens',
                    data: [90, 90, 94, 92, 80, 100, 95, 75],
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
                            font: { size: 20 }
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
        <scroll-page id="page-1">
            <div>
                <h1 class="titulos">HABILIDADES</h1>
            </div>
            <scroll-container>
                <scroll-page>
                    <div class="containerPage1">
                        <div style="padding: 0px 40px;">
                            <Radar :data="data" :options="options" />
                        </div>
                        <div style="padding: 0px 40px; text-align: center;">
                            <div>
                                <h4>Experiência</h4>
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
                                        <img src="../assets/img/node.svg" alt="Node">
                                        <p>NodeJs</p>
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
                        <div style="padding: 0px 40px;">
                            <div class="lista">
                                <h4 style="text-align: center;">Soft Skills</h4>
                                <ul>
                                    <li>Empatia</li>
                                    <li>Comunicação</li>
                                    <li>Perseverança</li>
                                    <li>Flexibilidade</li>
                                    <li>Autodidata</li>
                                    <li>Organização</li>
                                </ul>
                            </div>
                            <div style="margin-top: 50px; align-items: center;">
                                <h4 style="text-align: center;">Frameworks & Bibliotecas</h4>
                                <div style="display: flex; justify-content: space-around;">
                                    <div class="divFramework">
                                        <img src="../assets/img/vue.svg" alt="Vue">
                                        <p>VueJs</p>
                                    </div>
                                    <div class="divFramework">
                                        <img src="../assets/img/react.svg" alt="Vue">
                                        <p>React</p>
                                    </div>
                                    <div class="divFramework">
                                        <img src="../assets/img/laravel.svg" alt="Vue">
                                        <p>Laravel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </scroll-page>
            </scroll-container>
        </scroll-page>
        <scroll-page id="page-2">
<!--             <div>
                <CCarousel controls>
                    <CCarouselItem>
                        <img class="d-block w-100" src="../assets/img/vue.svg" alt="slide 1" />
                    </CCarouselItem>
                    <CCarouselItem>
                        <img class="d-block w-100" src="../assets/img/html5.svg" alt="slide 2" />
                    </CCarouselItem>
                    <CCarouselItem>
                        <img class="d-block w-100" src="../assets/img/html5.svg" alt="slide 3" />
                    </CCarouselItem>
                </CCarousel>
            </div> -->
        </scroll-page>
        <scroll-page id="page-3">
            <h1 class="titulos">TODOS OS PROJETOS</h1>
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
#my-scrollbar {
    width: 500px;
    height: 500px;
    overflow: auto;
}

#page-1 {
    background-color: rgb(240, 235, 239);
    height: 100%;
    display: grid;
    grid-template-rows: 100px 100%;
    grid-template-columns: 100%
}

.containerPage1 {
    width: 100%;
    height: calc(100% - 150px);
    display: grid;
    grid-template-columns: 33% 33% 33%;
    padding: 0px 20px;
    justify-content: center;
}

.lista li::marker {
    content: "► ";
}

ul {
    background: rgb(236, 132, 132);
    padding: 10px 20px;
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
}

.divFramework img {
    width: 50px;
    height: 50px;
}

#page-2 {
    background-color: rgb(124, 90, 245);
    height: 0%;
}

#page-3 {
    background-color: rgb(243, 234, 165);
    width: 100%;
    display: grid;
    padding-bottom: 20px;
}

.container {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
}

scroll-container {
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

.titulos {
    width: 100%;
    margin: 20px;
    text-align: center;
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
    margin: 10px;
    padding: 10px;
    display: grid;
    grid-template-rows: 90px 50px;
}

.divProjeto p {
    margin: 0px;
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

.btnVer:hover {
    margin: auto;
    text-decoration: none;
    color: black;
    box-shadow: 2px solid black;
    background-color: green;
}

.atributos {
    font-weight: 700;
}
</style>

