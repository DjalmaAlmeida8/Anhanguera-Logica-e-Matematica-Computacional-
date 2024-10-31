let compras = [];

        function atualizarTotal() {
            const total = compras.reduce((acc, valor) => acc + valor, 0);
            document.getElementById("totalCompras").innerText = `Total acumulado: R$ ${total.toFixed(2)}`;
        }

        function adicionarCompra() {
            const valorCompra = parseFloat(document.getElementById("valorCompra").value);
            const ultimaCompra = document.getElementById("ultimaCompra").value.toLowerCase();
            const alerta = document.getElementById("alerta");
            alerta.textContent = ""; // Limpa a mensagem de alerta

            if (isNaN(valorCompra) || valorCompra <= 0) {
                alert("Por favor, insira um valor de compra válido.");
                return;
            }

            // Verifica se o valor digitado é "s" ou "n"
            if (ultimaCompra !== 's' && ultimaCompra !== 'n') {
                alerta.textContent = "Por favor, insira apenas 's' ou 'n'.";
                return;
            }

            compras.push(valorCompra);
            document.getElementById("valorCompra").value = ""; // Limpa o campo
            atualizarTotal();

            if (ultimaCompra === 's') {
                document.getElementById("ultimaCompra").disabled = true;
                document.getElementById("valorCompra").disabled = true;
            }
        }

        function calcularFatura() {
            const totalFatura = compras.reduce((acc, valor) => acc + valor, 0);
            const diaPagamento = parseInt(document.getElementById("diaPagamento").value);

            if (isNaN(diaPagamento) || diaPagamento <= 0 || diaPagamento > 31) {
                alert("Por favor, insira um dia de pagamento válido (1-31).");
                return;
            }

            let resultado;
            if (diaPagamento <= 25) {
                resultado = `Fatura paga no prazo. Valor final: R$ ${totalFatura.toFixed(2)}`;
            } else {
                const diasAtraso = diaPagamento - 25;
                const juros = totalFatura * 0.03 + (totalFatura * 0.01 * diasAtraso);
                const valorFinal = totalFatura + juros;
                resultado = `Fatura com juros. Dias de atraso: ${diasAtraso}.<br>Valor final com juros: R$ ${valorFinal.toFixed(2)}`;
            }

            document.getElementById("resultado").innerHTML = resultado;
        }

        function limparDados() {
            compras = [];
            document.getElementById("valorCompra").value = "";
            document.getElementById("ultimaCompra").value = "";
            document.getElementById("ultimaCompra").disabled = false;
            document.getElementById("valorCompra").disabled = false;
            document.getElementById("diaPagamento").value = "";
            document.getElementById("resultado").innerHTML = "";
            document.getElementById("alerta").textContent = ""; // Limpa a mensagem de alerta
            atualizarTotal();
        }