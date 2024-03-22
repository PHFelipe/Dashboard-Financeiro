import barbeiro from "../../assets/Barbeiro.svg";
import "./Main.css";
import Chart from "../charts/Chart";
const Main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <p>Bem vindo ao seu painel</p>
                    </div>
                </div>
                <div className="main__cards">
                    <div className="card">
                        <div className="card_inner">
                            <p className = "text-primary-p"> Número de atendimentos</p>
                            <span className="font-bold text-title"> 578</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_inner">
                            <p className = "text-primary-p"> Rendimento Mensal</p>
                            <span className="font-bold text-title"> R$ 2.467</span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card_inner">
                            <p className = "text-primary-p">Rendimento Anual </p>
                            <span className="font-bold text-title"> R$ 10.000</span>
                        </div>
                    </div>

                    <div className="card"> 
                        <div className="card_inner">
                            <p className = "text-primary-p"> Gastos Totais</p>
                            <span className="font-bold text-title"> R$ 1000.0</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Report</h1>
                                <p>Ubatuba, são paulo,br</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart/>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <i class="fa-solid fa-user"></i>
                                <h1>Comissões por Barbeiro</h1>
                            </div>
                        </div>
                        
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>lucro</h1>
                                <p>R$2500</p>
                            </div>

                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$250.0</p>
                            </div>

                            <div className="card3">
                                <h1>Custos de Hospedagem</h1>
                                <p>R$150</p>
                            </div>

                            <div className="card4">
                                <h1>Banco de dados</h1>
                                <p>R$190</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main;