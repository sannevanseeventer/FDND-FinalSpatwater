<script>
  let name = "";
  let email = "";
  let subject = "";
  let message = "";
</script>

<!--==================== CONTACT FORM ====================-->
<form action="https://api.web3forms.com/submit" method="POST">
  <input
    type="hidden"
    name="access_key"
    value="e33b9602-7604-4358-b311-89c1d5d54b5a"
  />

  <label for="name">Naam</label>
  <input
    class="field"
    bind:value={name}
    type="text"
    id="name"
    name="name"
    required
  />

  <label for="email">E-mail</label>
  <input
    class="field"
    bind:value={email}
    type="email"
    id="email"
    name="email"
    required
  />

  <label for="subject">Onderwerp</label>
  <input
    class="field"
    bind:value={subject}
    type="text"
    id="subject"
    name="subject"
    required
  />

  <label for="message">Bericht</label>
  <textarea
    class="field"
    bind:value={message}
    id="message"
    name="message"
    rows="10"
    required
  />

  <input class="green-link no-border" style="color: #fff;" type="submit" value="Versturen" />
</form>

<style>
  form {
    width: 100%;
  }

  .field {
    width: 100%;
    border: 1px solid #d5d5d5;
    padding: 0.4rem 0.5rem;
    border-radius: 0.5rem;
    margin: 0.5rem 0rem 1rem 0rem;
  }

  .no-border {
    border: none;
    text-decoration: none;
    cursor: pointer;
  }

  label {
    color: var(--darkblue);
  }

  textarea {
    resize: none;
  }

  textarea:focus,
  input:focus {
    outline-color: var(--green);
    outline-width: 1px;
  }
</style>
