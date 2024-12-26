import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["voiceInput"];

    connect() {
        if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
            console.error("Reconhecimento de voz não é suportado neste navegador.");
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();

        this.recognition.lang = "pt-BR";
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        this.recognition.onresult = this.onResult.bind(this);
        this.recognition.onend = this.onEnd.bind(this);
        this.recognition.onerror = this.onError.bind(this);
    }

    start(event) {
        const icon = event.currentTarget;
        if (icon.classList.contains("active")) {
            this.recognition.stop();
        } else {
            this.targetInput = document.querySelector(`[data-target="${icon.dataset.target}"]`);
            icon.classList.add("active");
            this.recognition.start();
        }
    }

    onResult(event) {
        const transcript = event.results[0][0].transcript;
        if (this.targetInput) {
            this.targetInput.value = transcript;
        }
    }

    onEnd() {
        document.querySelectorAll(".microphone-icon.active").forEach((icon) => {
            icon.classList.remove("active");
        });
    }

    onError(event) {
        console.error("Erro no reconhecimento de voz:", event.error);
        this.onEnd();
    }
}
