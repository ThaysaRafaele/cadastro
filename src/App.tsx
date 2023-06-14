import './App.css';

function App() {
  return (
     <div className="container">
        <h1>Cadastro</h1>
        <form action="cadastro.html" method="post">
          <fieldset>
            <legend>Dados Pessoais</legend>

            <label htmlFor="nome">Nome completo:</label>
            <input type="text" id="nome" name="nome" required /><br />

            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required /><br />

            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required /><br />

            <label htmlFor="bairro">Bairro:</label>
            <input type="text" id="bairro" name="bairro" required /><br />

            <label htmlFor="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" required /><br />

            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" required />


            <label htmlFor="uf">UF:</label>
            <select id="uf" name="uf" required>
              <option value="">Selecione</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select><br />

            <label htmlFor="data_nascimento">Data de Nascimento:</label>
            <input type="date" id="data_nascimento" name="data_nascimento" required /><br />

            <label className="labelCadastro" htmlFor="sexo">Sexo</label><br />
            <label className="labelCadastro" htmlFor="sexo-m">M</label>
            <input type="radio" id="sexo-m" name="sexo" value="M" />
            <label className="labelCadastro" htmlFor="sexo-f">F</label>
            <input type="radio" id="sexo-f" name="sexo" value="F" /><br />

            <label htmlFor="estado_civil">Estado Civil:</label>
            <select id="estado_civil" name="estado_civil">
              <option value="">Selecione</option>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="viuvo">Viúvo</option>
              <option value="divorciado">Divorciado</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Dados de Contato</legend>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /><br />
            
            <label htmlFor="website">Website:</label>
            <input type="url" id="website" name="website" /><br />      
            
            <label htmlFor="telefone">Telefone:</label>
            <input type="text" id="telefone" name="telefone" /><br />

            <label htmlFor="celular">Celular:</label>
            <input type="text" id="celular" name="celular" required />      
          </fieldset>

          <fieldset className="fieldset-group">
            <legend>Dados de Cadastro</legend>

           
              <label htmlFor="login">Login:</label>
              <input type="text" id="login" name="login" required />

              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" name="senha" required /><br />

            <label className="labelCadastro">Deseja receber informações sobre os seguintes assuntos abaixo:</label>

            <div className="checkOptions">
              <input type="checkbox" id="tecnologia" name="assuntos[]" value="Tecnologia" />
              <label htmlFor="tecnologia">Tecnologia</label>

              <input type="checkbox" id="esportes" name="assuntos[]" value="Esportes" />
              <label htmlFor="esportes">Esportes</label>

              <input type="checkbox" id="automoveis" name="assuntos[]" value="Automóveis" />
              <label htmlFor="automoveis">Automóveis</label>

              <input type="checkbox" id="culinaria" name="assuntos[]" value="Culinária" />
              <label htmlFor="culinaria">Culinária</label>

              <input type="checkbox" id="politica" name="assuntos[]" value="Política" />
              <label htmlFor="politica">Política</label>

              <input type="checkbox" id="policial" name="assuntos[]" value="Policial" />
              <label htmlFor="policial">Policial</label>

              <input type="checkbox" id="tempo" name="assuntos[]" value="Tempo" />
              <label htmlFor="tempo">Tempo</label>

              <input type="checkbox" id="cultura" name="assuntos[]" value="Cultura" />
              <label htmlFor="cultura">Cultura</label>

              <input type="checkbox" id="economia" name="assuntos[]" value="Economia" />
              <label htmlFor="economia">Economia</label>

              <input type="checkbox" id="jogos" name="assuntos[]" value="Jogos" />
              <label htmlFor="jogos">Jogos</label>

              <input type="checkbox" id="educacao" name="assuntos[]" value="Educação" />
              <label htmlFor="educacao">Educação</label>

              <input type="checkbox" id="viagem" name="assuntos[]" value="Viagem" />
              <label htmlFor="viagem">Viagem</label>

              <input type="checkbox" id="empregos" name="assuntos[]" value="Empregos" />
              <label htmlFor="empregos">Empregos</label>

              <input type="checkbox" id="moda_estilo" name="assuntos[]" value="Moda e Estilo" />
              <label htmlFor="moda_estilo">Moda e Estilo</label>

              <input type="checkbox" id="regras" name="regras" required />
              <label className="labelCadastro" htmlFor="regras">Li as regras de cadastro e autorizo a criação do usuário</label>
            </div>
          </fieldset>
          
        <input type="submit" value="Confirmar" />
        <button type="button">Retornar</button>
      </form>
    </div>
  );
}

export default App;
