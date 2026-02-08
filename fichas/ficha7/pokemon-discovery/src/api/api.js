export async function get(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type'/** diz ao servidor que tipo de dados está a enviar ex.: JSON, HTML, texto simples... */: 'application/json'
                /** 
                 * Authorization --> envia um tocken ou chave para autenticar a requisiçao
                 * Accept --> diz ao servidor que tipo de resposta aceita ex.: JSON, XML
                 */
            }
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error (`Falha na requisição: ${error.message}`);
    }
}