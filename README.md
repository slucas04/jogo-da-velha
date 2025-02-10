# Jogo da Velha ⭕❌

Este projeto utiliza a tecnologia **React** e **Next.js** para componentizar e desenvolver uma página que funciona como um **Jogo da Velha** responsivo, funcional e com novas funções, como a de viagem no tempo! O jogo é baseado no **[Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe)**, fornecido pela documentação do React, mas implementado totalmente por mim e evoluído a um visual, componentização e boas práticas melhores aplicados, assim como sugerido pelo próprio site que seja feito para a prática e estudo do framework.

---

## 🛠️ Tecnologias utilizadas

- **React v19:** Biblioteca principal para construção da interface.
- **Bootstrap:** Estilização responsiva e moderna.
- **Next.js:**  renderização server-side (SSR), rotas dinâmicas e renderização estática.
- **JavaScript (ES6+):** Linguagem de programação utilizada.

---

## ⬆️ Melhorias

### Antes - modelo sugerido pela documentação
  <div align="center">
    ![antes](https://github.com/user-attachments/assets/fe6e66c4-53ba-4238-8cc0-c057a73d555a)
  </div>
  
### Depois - página final após melhorias feitas usando Bootstrap, animações CSS e React states
  <div align="center">
    ![depois](https://github.com/user-attachments/assets/7eb85d03-58e6-40fb-992a-96f0bbc099f1)
  </div>
  
---

## 🚀 Principais funcionalidades

1. **Turnos:**
   - Os jogadores X e O tomam turnos alternados, com uma cor representando cada um deles no tabuleiro
   - Caso algum dos jogadores formem uma linha vertical, horizontal ou diagonal de 3 elementos iguais, uma animação rodará na linha e o vencedor será anunciado
   - Se o jogo acabar e ninguém formar uma linha vencedora, todos os quadrados rodam uma animação final e é anunciado um empate

2. **Viagem no tempo:**
   - Com o sistema de **states** do React, é possível passar estados dos quadrados do tabuleiro para que o jogo salve um histórico de todas as jogadas, possibilitando voltar em um estado anterior do tabuleiro

---

## 📝 Sobre o projeto

Esta interface foi desenvolvida com o intuito de estudar as funcionalidades do **React v19**, focando em **hooks**, **states**, **imutabilidade**, **re-renderização** e **componentização**. O tutorial na documentação do React serviu como uma base, mas todos os upgrades foram idealizados por mim, visando tornar o jogo funcional, amigável e divertido.

Sinta-se à vontade para explorar o repositório, contribuir e deixar feedback! 
