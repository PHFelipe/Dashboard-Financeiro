import "./Main.css";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
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
                            <i class="fa-solid fa-sack-dollar fa-xl"></i>
                            <p className = "text-primary-p"> Faturamento Total</p>
                            <span className="font-bold text-title"> R$ 1.000</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_inner">
                            <i class="fa-solid fa-user-group fa-xl"></i>
                            <i class="fa-solid fa-dollar-sign fa-lg" ></i>
                            <p className = "text-primary-p"> Total de Comissões</p>
                            <span className="font-bold text-title"> R$ 785</span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card_inner">
                            <i class="fa-solid fa-cash-register fa-xl"></i>
                            <p className = "text-primary-p"> Valor de Caixa </p>
                            <span className="font-bold text-title"> R$ 75</span>
                        </div>
                    </div>

                    <div className="card" id="card-lucro">
                        <div className="card_inner" >
                        <i class="fa-solid fa-coins fa-xl"></i>
                            <p className = "text-primary-p"> Lucro Total</p>
                            <span className="font-bold text-title"> R$ 162</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <i class="fa-solid fa-money-bill-trend-up fa-lg"></i>
                                <h1>Lucro</h1>
                            </div>
                        </div>
                        <LineChart/>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <i class="fa-solid fa-user fa-lg"></i>
                                <h1>Comissões por Barbeiro</h1>
                            </div>
                        </div>
                        
                        <div className="charts__right__cards">
                            <BarChart/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main;