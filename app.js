(() => {
  const input = document.getElementById('entry-date');
  const lastDay = document.getElementById('last-day');
  const detail = document.getElementById('day-detail');
  const dateFormat = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  });

  function renderDay30() {
    if (!input.value) {
      lastDay.textContent = 'Выбери дату';
      detail.textContent = 'день въезда считается первым';
      return;
    }
    const parts = input.value.split('-').map(Number);
    if (parts.length !== 3 || parts.some(Number.isNaN)) return;
    const entry = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
    const day30 = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2] + 29));
    lastDay.textContent = dateFormat.format(day30);
    detail.textContent = `при въезде ${dateFormat.format(entry)}`;
  }

  input.addEventListener('input', renderDay30);
  input.addEventListener('change', renderDay30);
  renderDay30();
})();
