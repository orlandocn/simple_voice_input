module SimpleVoiceInput
  module VoiceInputHelper
    def voice_input(method, options = {})
      input_html_options = options[:input_html] || {}
      input_html_options[:class] = Array(input_html_options[:class]) << 'voice-input'
      input_html_options[:placeholder] ||= 'Diga algo...'

      @template.content_tag(:div, class: 'voice-input-container') do
        self.input(method, options.merge(input_html: input_html_options)) +
            @template.content_tag(:span, '🎤', class: 'microphone-icon', data: { target: "voice-input-#{method}" })
      end
    end
  end
end

# Extende o SimpleForm
SimpleForm::FormBuilder.include SimpleVoiceInput::VoiceInputHelper

