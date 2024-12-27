# SimpleVoiceInput

**SimpleVoiceInput** é uma gem para Ruby on Rails que adiciona suporte a campos de texto com reconhecimento de voz no **SimpleForm**. Com esta gem, você pode criar inputs estilizados que permitem que os usuários insiram texto através de comandos de voz.

## Recursos

- Integração com **SimpleForm**.
- Suporte ao reconhecimento de voz usando a API de SpeechRecognition do navegador.
- Interface personalizável com ícone de microfone.

---

## Instalação

Adicione a gem ao seu **Gemfile**:

```ruby
gem 'simple_voice_input'
```

Execute o bundle:

```bash
bundle install
```

Inclua os assets necessários no seu projeto.

### Estilos CSS
Adicione o seguinte ao arquivo principal de estilos, como `application.css` ou `application.scss`:

```css
@import "simple_voice_input";
```

### JavaScript
Certifique-se de estar usando **Stimulus** e registre o controlador da gem no seu projeto. No arquivo `app/javascript/controllers/index.js`, adicione:

```javascript
import SimpleVoiceInputController from "simple_voice_input/controllers/simple_voice_input_controller";
application.register("simple-voice-input", SimpleVoiceInputController);
```

---

## Uso

Com **SimpleVoiceInput**, você pode adicionar inputs com reconhecimento de voz facilmente em seus formulários usando **SimpleForm**. Exemplo:

```erb
<%= simple_form_for @model do |f| %>
  <%= f.voice_input :campo_de_texto, label: "Comando de voz", input_html: { class: "meu-input-custom" } %>
  <%= f.submit "Enviar" %>
<% end %>
```

### Opções Disponíveis

- **label**: Define o texto do rótulo para o input.
- **input_html**: Permite personalizar as classes e atributos do campo de entrada.

---

## Requisitos

- Rails 6.0 ou superior.
- SimpleForm 5.0 ou superior.
- Navegadores com suporte à API de SpeechRecognition (ex.: Chrome, Edge).

---

## Personalização

### CSS
Você pode modificar os estilos do ícone de microfone e do contêiner no seu CSS:

```css
.voice-input-container {
  position: relative;
  width: 100%;
}

.voice-input-container .microphone-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 20px;
  color: #555;
}

.voice-input-container .microphone-icon.active {
  color: red;
}
```

### JavaScript
Se você deseja alterar o comportamento padrão do reconhecimento de voz, edite o controlador Stimulus fornecido.

---

## Contribuições

Contribuições são bem-vindas! Para reportar problemas ou sugerir melhorias:

1. Fork este repositório.
2. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-contribuicao
   ```
3. Submeta um pull request.

---

## Licença

Esta gem está disponível sob a licença [MIT](LICENSE).

