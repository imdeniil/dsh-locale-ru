# dsh-locale-ru

Русская локализация (ru) для [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) — переводит веб-интерфейс, клиент [DSH Desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) и магазин плагинов сообщества (dsh-community-market). Автоматически активируется для браузеров на русском языке.

English summary: a Russian (ru) locale plugin for DeepSeek Harness. Registers ru dictionaries for every locale namespace shipped by the official UI packages (plus the community plugin market), adds «Русский» to the language selector, and auto-activates for Russian-language browsers. Built after the example of [dsh-locale-ptbr](https://github.com/negriniainda/dsh-locale-ptbr).

## Что переводится

- **849 строк в 30 пространствах имён**: сессии и рабочие пространства, настройки (модели, плагины, пресеты агента, тема, разрешения), диалог разговора и инструменты, субагенты, воркфлоу, траектория, задачи, скиллы, цели
- **Уведомление о бета-тестировании** и диалог выбора папки рабочего пространства
- **Магазин плагинов сообщества** (вкладка «Магазин плагинов» в Настройки → Плагины): обзор каталога, источники, установка/удаление/отключение/включение плагинов, диалоги подтверждения

## Как это работает

- Регистрирует русские словари через публичный API `locale.register(ns, 'ru', dict)`.
- Добавляет «Русский» в список выбора языка в настройках (официальный список жёстко ограничен zh/en, поэтому плагин расширяет его в рантайме, защитительно и без ломки при обновлениях апстрима).
- Если язык браузера — русский (или белорусский) и пользователь явно не выбрал English/中文 — интерфейс автоматически переключается на русский.
- Явный выбор English или 中文 в настройках имеет приоритет.
- Для ключей, которых нет в словаре, рантайм откатывается к китайскому (zh — первичный язык DSH), поэтому покрытие всех ключей проверяется автоматически.

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
