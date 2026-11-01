# dsh-locale-ru

Русская локализация (ru) для [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) — переводит веб-интерфейс, клиент [DSH Desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) и магазин плагинов сообщества (dsh-community-market). Автоматически активируется для браузеров на русском языке.

English summary: a Russian (ru) locale plugin for DeepSeek Harness. Registers ru dictionaries for every locale namespace shipped by the official UI packages (plus the community plugin market), adds «Русский» to the language selector, and auto-activates for Russian-language browsers. Built after the example of [dsh-locale-ptbr](https://github.com/negriniainda/dsh-locale-ptbr).

## Поддерживаемая версия

DSH **0.2.1-rc.5 и новее**. Плагин использует публичный API локализации
(`ctx.locale.addLanguage` / `ctx.locale.register`); на более старых сборках, где список
языков был жёстко ограничен `zh`/`en`, он не активируется и печатает предупреждение
в консоль.

## Что переводится

- **849 строк в 30 пространствах имён**: сессии и рабочие пространства, настройки (модели, плагины, пресеты агента, тема, разрешения), диалог разговора и инструменты, субагенты, воркфлоу, траектория, задачи, скиллы, цели
- **Уведомление о бета-тестировании** и диалог выбора папки рабочего пространства
- **Магазин плагинов сообщества** (вкладка «Магазин плагинов» в Настройки → Плагины): обзор каталога, источники, установка/удаление/отключение/включение плагинов, диалоги подтверждения

## Как это работает

- Регистрирует язык «Русский» и русские словари через публичный API
  `locale.addLanguage({ id: 'ru', label: 'Русский', fallback: 'en' })` и
  `locale.register(ns, 'ru', dict)`.
- «Русский» появляется в штатном списке выбора языка (**Настройки → Общие → Язык**) —
  плагин не патчит внутренности локали и не ломается при обновлениях DSH.
- Если язык браузера/системы — русский (или белорусский) и пользователь явно не выбрал
  English/中文, интерфейс автоматически переключается на русский: выбор языка выполняет
  сам DSH, явное предпочтение пользователя имеет приоритет.
- Для ключей, которых нет в словаре, используется английский fallback (`ru → en`),
  поэтому непереведённые строки остаются понятными, а не китайскими.

## Установка

Из GitHub:

```bash
dsh plugin --profile web add github:imdeniil/dsh-locale-ru
dsh plugin --profile desktop add github:imdeniil/dsh-locale-ru   # для DSH Desktop
```

Или из локальной папки:

```bash
git clone https://github.com/imdeniil/dsh-locale-ru.git
dsh plugin --profile web add /путь/к/dsh-locale-ru
```

После установки выберите «Русский» в Настройки → Язык (или просто перезапустите приложение с русским языком системы — включится само).

## Разработка

- `lib/dicts.js` — единственный источник переводов (обычный ESM, редактируется напрямую).
- `npm run build` генерирует `lib/client.js` — браузерный бандл, который инлайнит словари.
- `STRINGS.md` — полная таблица «английский оригинал → русский перевод» для ревью.

## Лицензия

MIT
