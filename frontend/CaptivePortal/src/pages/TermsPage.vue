<template>
  <q-page class="flex flex-center column">
    <h5>Termos de Uso do WiFi</h5>
    <p>Leia atentamente os termos abaixo...</p>
    <q-btn label="Aceito os Termos" color="primary" @click="acceptTerms" />
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { api } from 'boot/axios'; // Exemplo se você usar o axios do Quasar

const router = useRouter();

async function acceptTerms() {
  try {
    // Enviar requisição para o backend informando que o usuário aceitou
    // Você precisará de alguma forma de identificar o usuário/dispositivo aqui.
    // Geralmente, o Captive Portal envia informações como o IP ou MAC via parâmetros na URL
    // quando redireciona o usuário para a página do portal.
    // Por enquanto, vamos simular uma requisição simples.
    const response = await api.post('/api/accept-terms', {
      // Aqui você enviaria o identificador do cliente, se disponível
      // por exemplo: clientId: route.query.client_id
    });

    if (response.data.success) {
      // Se o backend informar que o aceite foi registrado e a liberação está em andamento
      console.log('Termos aceitos com sucesso!');
      // O próximo passo seria instruir o navegador a tentar acessar
      // uma página externa para o AP interceptar e liberar o acesso.
      // Isso também depende da integração com o AP.
      // Por enquanto, podemos apenas redirecionar para uma página de sucesso
      void router.push('/success'); // Crie uma página SuccessPage
    } else {
      console.error('Erro ao registrar aceite dos termos.');
      // Exibir mensagem de erro para o usuário
    }

  } catch (error) {
    console.error('Erro na comunicação com o backend:', error);
    // Exibir mensagem de erro
  }
}
</script>