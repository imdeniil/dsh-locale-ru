# STRINGS.md — ревью перевода dsh-locale-ru

Полный список строк по пространствам имён (65 namespace / 3050 строк). Колонка **English (original)** — официальный текст DSH 0.2.1-rc.5; колонка **Русский** — перевод этого плагина. Токены `{имя}` — переменные, сохраняются дословно. Раздел `community-market` относится к стороннему магазину плагинов сообщества.

## agent-team

| Ключ | English (original) | Русский |
|---|---|---|
| blocked | Blocked by dependencies | Заблокировано зависимостями |
| blockedBy | Blocked by | Заблокировано |
| current | Current chat | Текущий чат |
| empty | No shared tasks yet. Create them through the conversation. | Общих задач пока нет. Создавайте их в ходе разговора. |
| failure | Invalid persisted Team record: {message} | Недопустимая сохранённая запись команды: {message} |
| loading | Loading Team… | Загрузка команды… |
| memberStatus.failed | Failed | Ошибка |
| memberStatus.inactive | Inactive | Неактивен |
| memberStatus.provisioning | Provisioning | Подготовка |
| memberStatus.running | Running | Работает |
| model | Model | Модель |
| open | Open member conversation | Открыть диалог участника |
| owner | Owner | Владелец |
| ready | Ready | Готово |
| roster | Members | Участники |
| status.completed | Completed | Завершено |
| status.in_progress | In progress | В работе |
| status.pending | Pending | Ожидает |
| task.collapse | Show less | Показать меньше |
| task.expand | Show more | Показать больше |
| tasks | Shared tasks | Общие задачи |
| trigger | Agent Team | Agent Team |
| unavailable | Team is unavailable | Команда недоступна |
| unowned | Unowned | Без владельца |
| writeScopes | Write scopes | Области записи |

## approval

| Ключ | English (original) | Русский |
|---|---|---|
| allowOnce | Allow once | Разрешить один раз |
| detail.aria | Approval details | Детали подтверждения |
| escalation | Tool {toolName} requests privileged execution | Инструмент {toolName} запрашивает привилегированное выполнение |
| reject | Reject | Отклонить |
| waiting | Waiting for approval | Ожидание подтверждения |

## chat

| Ключ | English (original) | Русский |
|---|---|---|
| chat.deepDiving | Deep diving | Глубокое погружение |
| chat.deepDivingFor | Deep diving for {duration} ··· | Глубокое погружение {duration} ··· |
| chat.loadError | Failed to load history: {message} ({code}) | Не удалось загрузить историю: {message} ({code}) |
| chat.loadOlder | Load earlier | Загрузить ранее |
| chat.loadingHistory | Loading history… | Загрузка истории… |
| chat.toBottom | Back to bottom | Вниз |
| chat.turnNavigation.jump | Jump to turn {turn} | Перейти к ходу {turn} |
| chat.turnNavigation.jumpLoad | Load and jump to turn {turn} | Загрузить и перейти к ходу {turn} |
| chat.turnNavigation.label | Turn navigation | Навигация по ходам |
| chat.turnNavigation.turn | Turn {turn} | Ход {turn} |
| clock.md | {m}/{d} | {m}/{d} |
| clock.ymd | {y}-{m}-{d} | {y}-{m}-{d} |
| command.done | Completed | Завершено |
| command.failed | Command failed | Ошибка команды |
| command.running | Running… | Выполняется… |
| command.title | Command | Команда |
| duration.compactMinutes | {minutes}m{seconds}s | {minutes}м{seconds}с |
| duration.compactSeconds | {seconds}s | {seconds}с |
| duration.hourUnit | h  | ч  |
| duration.milliseconds | {milliseconds}ms | {milliseconds}мс |
| duration.minuteUnit | m  | м  |
| duration.secondUnit | s | с |
| fileOpen.title | Couldn’t open file | Не удалось открыть файл |
| fileOpen.unknown | Couldn’t open this file | Не удалось открыть этот файл |
| image.close | Close image preview | Закрыть просмотр изображения |
| image.dialog | Image preview | Просмотр изображения |
| image.failed | Image preview unavailable | Просмотр изображения недоступен |
| image.loading | Loading image… | Загрузка изображения… |
| image.open | View full image | Открыть изображение полностью |
| json.truncated | … truncated, {total} characters total | … сокращено, всего символов: {total} |
| message.branch | Branch into a new conversation | Ответвить в новый диалог |
| message.branchUnavailable | Available only on the last message of a completed turn | Доступно только для последнего сообщения завершённого хода |
| message.compaction | Context compacted | Контекст сжат |
| message.compaction.commandTitle | compact | compact |
| message.compaction.completed | Compacted {items} history items (~{tokens} tokens) | Сжато элементов истории: {items} (~{tokens} токенов) |
| message.compaction.expand | View compaction summary | Показать сводку сжатия |
| message.compaction.running | Compacting context… | Сжатие контекста… |
| message.compaction.unavailable | Compaction summary unavailable | Сводка сжатия недоступна |
| message.context.catalog.more | … {count} more | … ещё {count} |
| message.context.catalog.replaced | Replacement catalog | Каталог замен |
| message.context.instructions.added | added | добавлено |
| message.context.instructions.loaded | loaded | загружено |
| message.context.instructions.removed | removed | удалено |
| message.context.instructions.updated | updated | обновлено |
| message.context.recall.counts | {retained} kept · {omitted} omitted | сохранено: {retained} · пропущено: {omitted} |
| message.context.recall.truncated | truncated | сокращено |
| message.context.relay.from | From session {session} | Из сессии {session} |
| message.context.snapshot.supersedes | Supersedes earlier snapshots | Заменяет предыдущие снимки |
| message.contextInjection | Context injection | Внедрение контекста |
| message.contextRecall | Session recall | Память сессии |
| message.extraBlock | Extra content block | Дополнительный блок содержимого |
| message.failure.accountSignInRequired | Sign in to DeepSeek and ensure the request destination supports account authentication. | Войдите в DeepSeek и убедитесь, что адресат запроса поддерживает аутентификацию по аккаунту. |
| message.failure.accountSignedOut | Stopped because you signed out of DeepSeek. | Остановлено: вы вышли из DeepSeek. |
| message.failure.auth | API key is invalid | Недействительный ключ API |
| message.failure.interrupted | The DSH process exited before this turn finished (for example, it was killed, crashed, or timed out while shutting down), so the turn was closed when DSH restarted. Unfinished tool calls have unknown outcomes. | Процесс DSH завершился до окончания этого хода (например, был убит, аварийно завершился или истёк тайм-аут при выключении), поэтому при перезапуске DSH ход был закрыт. Результаты незавершённых вызовов инструментов неизвестны. |
| message.failure.quota | Request quota exhausted. | Квота запросов исчерпана. |
| message.maxTokens | Output token limit reached | Достигнут лимит выходных токенов |
| message.maxTokens.hint | The reply was cut off; earlier output is preserved in the conversation. Send "continue" to let the model resume. | Ответ обрезан; предыдущие выводы сохранены в диалоге. Отправьте «continue», чтобы модель продолжила. |
| message.referenceSeparator | ,  | ,  |
| message.referenceSummary | Referenced session · {labels} | Связанная сессия · {labels} |
| message.retry.active | Retrying model request | Повтор запроса к модели |
| message.retry.cancelled | Model request retry cancelled | Повтор запроса к модели отменён |
| message.retry.delay | Retry delay:  | Задержка повтора:  |
| message.retry.failure | Failure reason:  | Причина сбоя:  |
| message.retry.scheduled | Waiting to retry model request | Ожидание повтора запроса к модели |
| message.retry.started | Retried model request | Запрос к модели повторён |
| message.retry.status | {label} ({retry}/{maximum}) · {seconds}s | {label} ({retry}/{maximum}) · {seconds}с |
| message.stepProcess.code | Running code | Выполнение кода |
| message.stepProcess.comma | ,  | ,  |
| message.stepProcess.commands | Running commands | Выполнение команд |
| message.stepProcess.done.code | Ran code | Код выполнен |
| message.stepProcess.done.commands | Ran commands | Команды выполнены |
| message.stepProcess.done.edit | Edited files | Файлы изменены |
| message.stepProcess.done.plan | Updated the plan | План обновлён |
| message.stepProcess.done.questions | Asked questions | Вопросы заданы |
| message.stepProcess.done.read | Read files | Файлы прочитаны |
| message.stepProcess.done.readImage | Read images | Изображения просмотрены |
| message.stepProcess.done.search | Searched code | Поиск по коду выполнен |
| message.stepProcess.done.subagents | Coordinated subagents | Координация субагентов |
| message.stepProcess.done.thinking | Analysis completed | Анализ завершён |
| message.stepProcess.done.tools | Called tools | Вызовы инструментов |
| message.stepProcess.done.webFetch | Visited web pages | Веб-страницы открыты |
| message.stepProcess.done.webSearch | Searched the web | Поиск в интернете выполнен |
| message.stepProcess.done.write | Wrote files | Файлы записаны |
| message.stepProcess.edit | Editing files | Изменение файлов |
| message.stepProcess.joinTwo | {first} and {second} | {first} и {second} |
| message.stepProcess.more | {title}, etc. | {title} и др. |
| message.stepProcess.plan | Updating the plan | Обновление плана |
| message.stepProcess.prepare.code | Preparing to run code | Подготовка к выполнению кода |
| message.stepProcess.prepare.commands | Preparing to run commands | Подготовка к выполнению команд |
| message.stepProcess.prepare.edit | Preparing to edit files | Подготовка к изменению файлов |
| message.stepProcess.prepare.plan | Preparing to update the plan | Подготовка к обновлению плана |
| message.stepProcess.prepare.questions | Preparing questions | Подготовка вопросов |
| message.stepProcess.prepare.read | Preparing to read files | Подготовка к чтению файлов |
| message.stepProcess.prepare.readImage | Preparing to read images | Подготовка к просмотру изображений |
| message.stepProcess.prepare.search | Preparing to search code | Подготовка к поиску по коду |
| message.stepProcess.prepare.subagents | Preparing to coordinate subagents | Подготовка к координации субагентов |
| message.stepProcess.prepare.tools | Preparing tool calls | Подготовка вызовов инструментов |
| message.stepProcess.prepare.webFetch | Preparing to visit web pages | Подготовка к переходу на веб-страницы |
| message.stepProcess.prepare.webSearch | Preparing to search the web | Подготовка к поиску в интернете |
| message.stepProcess.prepare.write | Preparing to write files | Подготовка к записи файлов |
| message.stepProcess.questions | Waiting for your action | Ожидание вашего действия |
| message.stepProcess.read | Reading files | Чтение файлов |
| message.stepProcess.readImage | Reading images | Просмотр изображений |
| message.stepProcess.search | Searching code | Поиск по коду |
| message.stepProcess.sharedPrefix |  |  |
| message.stepProcess.subagents | Coordinating subagents | Координация субагентов |
| message.stepProcess.thinking | Analyzing the request | Анализ запроса |
| message.stepProcess.tools | Calling tools | Вызов инструментов |
| message.stepProcess.webFetch | Visiting web pages | Переход на веб-страницы |
| message.stepProcess.webSearch | Searching the web | Поиск в интернете |
| message.stepProcess.write | Writing files | Запись файлов |
| message.stopped | Stopped | Остановлено |
| message.systemPrompt | System prompt | Системный промпт |
| message.systemPromptUpdate | System prompt update | Обновление системного промпта |
| message.taskStopped | Task stopped | Задача остановлена |
| message.think | Think | Думать |
| message.tokensPerSecond | {tps} tok/s | {tps} ток/с |
| message.toolAdded | Tool added: {name} | Инструмент добавлен: {name} |
| message.toolRemoved | Tool removed: {name} | Инструмент удалён: {name} |
| message.toolsAdded | Added: {names} | Добавлено: {names} |
| message.toolsAddedCount | {count} added | Добавлено: {count} |
| message.toolsChanged | {added} added, {removed} removed | добавлено {added}, удалено {removed} |
| message.toolsRemoved | Removed: {names} | Удалено: {names} |
| message.toolsRemovedCount | {count} removed | Удалено: {count} |
| message.toolsUpdated | Tools updated | Инструменты обновлены |
| message.trigger.agent | Task message received | Получено сообщение задачи |
| message.trigger.explanation | This notification triggered this response. | Этот ответ вызван уведомлением. |
| message.trigger.github | GitHub event received | Получено событие GitHub |
| message.trigger.goal | Continuing goal | Продолжение цели |
| message.trigger.job | Background task updated | Фоновое задание обновлено |
| message.trigger.plugin | Plugin status updated | Статус плагина обновлён |
| message.trigger.request | Execution requested | Запрошено выполнение |
| message.trigger.schedule | Automation task | Задание автоматизации |
| message.trigger.subagent | Subtask status updated | Статус подзадачи обновлён |
| message.trigger.team | Team message received | Получено сообщение команды |
| message.trigger.webhook | External event received | Получено внешнее событие |
| message.turnError | This turn failed | Этот ход завершился ошибкой |
| message.turnProcess.failed | Failed | Ошибка |
| message.turnProcess.messages.one | {count} message | {count} сообщение |
| message.turnProcess.messages.other | {count} messages | {count} сообщений |
| message.turnProcess.separator |  ·  |  ·  |
| message.turnProcess.subagents.one | {count} subagent | {count} субагент |
| message.turnProcess.subagents.other | {count} subagents | {count} субагентов |
| message.turnProcess.thoughtForAWhile | Thought for a while | Размышлял |
| message.turnProcess.took | Completed in  | Выполнено за  |
| message.turnProcess.toolCalls.one | {count} tool call | {count} вызов инструмента |
| message.turnProcess.toolCalls.other | {count} tool calls | {count} вызовов инструментов |
| message.turnProcess.worked | Completed | Выполнено |
| message.turnUsage.cacheHit | Cache hit | Попадание в кеш |
| message.turnUsage.cacheRead | Cached input | Кешированный ввод |
| message.turnUsage.cacheWrite | Cache write | Запись в кеш |
| message.turnUsage.consumed | Usage {total} | Использовано {total} |
| message.turnUsage.count | {count} tok | {count} ток. |
| message.turnUsage.input | Uncached input | Некешированный ввод |
| message.turnUsage.model | Provider / model | Провайдер / модель |
| message.turnUsage.output | Output | Вывод |
| message.turnUsage.reasoning |  ({tokens} reasoning) |  (рассуждение: {tokens}) |
| message.turnUsage.title | Turn usage | Расход за ход |
| message.unknownBlock | Unknown content block | Неизвестный блок содержимого |
| message.unknownSurface | Unknown surface event: {type} | Неизвестное событие поверхности: {type} |
| number.groupSeparator | , | , |
| row.failed | Failed | Ошибка |
| row.running | Running | Выполняется |
| settings.collapse.completion | On completion | При завершении |
| settings.collapse.description | Choose when to automatically collapse work details | Выберите, когда автоматически сворачивать детали работы |
| settings.collapse.nextInput | On next message | При следующем сообщении |
| settings.collapse.title | When to Collapse Work Details | Когда сворачивать детали работы |
| settings.links.description | Choose where to open web links | Выберите, где открывать веб-ссылки |
| settings.links.newTab | Default Browser | Браузер по умолчанию |
| settings.links.sidebar | In-App Sidebar | Боковая панель приложения |
| settings.links.title | Open chat links in | Где открывать ссылки из чата |
| settings.performance.compact | Compact | Компактно |
| settings.performance.description | Choose how much performance and usage information to show | Выберите, сколько информации о производительности и расходе показывать |
| settings.performance.detailed | Detailed | Подробно |
| settings.performance.title | Performance & usage | Производительность и расход |
| settings.transcript.compact | Compact | Компактно |
| settings.transcript.description | Choose how much detail to show for tool calls | Выберите, насколько подробно показывать вызовы инструментов |
| settings.transcript.detailed | Detailed | Подробно |
| settings.transcript.standard | Standard | Стандартно |
| settings.transcript.title | Work details | Детали работы |
| settings.transcript.verbose | Verbose | Максимально подробно |
| stats.cacheHit | Cache hit {percent}% | Попадание в кеш {percent}% |
| stats.counts | {turns} turns {steps} steps | {turns} ходов, {steps} шагов |
| stats.dialog.llmTime | LLM time | Время LLM |
| stats.dialog.speed | Tokens per second (TPS) | Токенов в секунду (TPS) |
| stats.dialog.title | Session statistics | Статистика сессии |
| stats.dialog.toolTime | Tool time | Время инструментов |
| stats.dialog.ttft | Avg time to first token (TTFT) | Среднее время до первого токена (TTFT) |
| stats.dialog.usageTitle | Token usage | Расход токенов |
| view.chat | Chat | Чат |

## command

| Ключ | English (original) | Русский |
|---|---|---|
| description.compact | Compact older conversation history | Сжать старую историю диалога |
| description.export | Download this Session log as a ZIP archive | Скачать журнал этой сессии в виде ZIP-архива |
| description.feedback | Record feedback about this session | Оставить отзыв об этой сессии |
| description.goal | Set or view the goal for a long-running task | Задать или посмотреть цель длительной задачи |
| description.permission | Switch the permission preset (sandbox mode + approval policy) | Переключить пресет разрешений (режим песочницы + политика подтверждений) |
| description.plan | Enter or leave plan mode | Войти в режим плана или выйти из него |
| label.compact | Compact | Сжать |
| label.export | Export | Экспорт |
| label.feedback | Feedback | Отзыв |
| label.goal | Goal | Цель |
| label.permission | Permission | Разрешения |
| label.plan | Plan | План |
| listbox.aria | /{command} matches | Совпадения для /{command} |
| notice.attachmentsUnsupported | /{command} does not accept attachments; remove them first | /{command} не принимает вложения; сначала удалите их |
| overlay.aria | /{command} options | Параметры /{command} |
| search.aria | Filter options | Фильтр параметров |
| search.placeholder | Search… | Поиск… |
| section.add | Add | Добавить |
| section.commands | Commands | Команды |
| status.applying | Applying… | Применение… |
| status.empty | No options | Нет параметров |
| status.loading | Loading options… | Загрузка параметров… |
| token.compact | compact | compact |
| token.export | export | export |
| token.feedback | feedback | feedback |
| token.goal | goal | goal |
| token.permission | permission | permission |
| token.plan | plan | plan |

## common

| Ключ | English (original) | Русский |
|---|---|---|
| back | Back | Назад |
| brand.localBuild | DSH Local Build | Локальная сборка DSH |
| cancel | Cancel | Отмена |
| close | Close | Закрыть |
| codeBlock.title | Code block | Блок кода |
| codeBlock.unwrap | Do not wrap lines | Не переносить строки |
| codeBlock.wrap | Wrap lines | Переносить строки |
| collapse | Collapse | Свернуть |
| copied | Copied | Скопировано |
| copy | Copy | Копировать |
| copy.compactJson | Copy compact JSON | Копировать компактный JSON |
| copy.failed | Copy failed | Не удалось скопировать |
| copy.json | Copy JSON | Копировать JSON |
| copy.optionsHint | {action}; right-click for copy options | {action}; правый клик — параметры копирования |
| copy.path | Copy property path | Копировать путь свойства |
| copy.prettyJson | Copy pretty JSON | Копировать форматированный JSON |
| copy.value | Copy value | Копировать значение |
| delete | Delete | Удалить |
| edit | Edit | Изменить |
| expand | Expand | Развернуть |
| json.label | JSON | JSON |
| load.failed | Failed to load | Не удалось загрузить |
| loading | Loading… | Загрузка… |
| markdown.footnotes | Footnotes | Сноски |
| markdown.truncatedCharacters | … truncated at {total} characters | … сокращено до {total} символов |
| more | More | Ещё |
| next | Next | Далее |
| none | None | Нет |
| number.million | {value}M | {value} млн |
| number.thousand | {value}K | {value} тыс. |
| ok | OK | ОК |
| previous | Previous | Назад |
| retry | Retry | Повторить |
| save | Save | Сохранить |
| search | Search | Поиск |
| skip | Skip | Пропустить |
| submit | Submit | Отправить |
| submitting | Submitting… | Отправка… |
| truncated | Truncated | Сокращено |
| unknown | Unknown | Неизвестно |
| workspace.defaultName | Default workspace | Рабочая область по умолчанию |

## conversation

| Ключ | English (original) | Русский |
|---|---|---|
| ask.answered | {answered}/{total} answered | Отвечено: {answered}/{total} |
| ask.cancelled | cancelled | отменено |
| ask.cancelledDetail | This question set was cancelled before answers were submitted. | Этот набор вопросов был отменён до отправки ответов. |
| ask.closed | closed | закрыто |
| ask.closedDetail | This question is closed; its outcome is in the conversation below. | Этот вопрос закрыт; результат — в диалоге ниже. |
| ask.interrupted | interrupted | прервано |
| ask.interruptedDetail | This question set was interrupted before answers were submitted. | Этот набор вопросов был прерван до отправки ответов. |
| ask.pending | continued; answer still available | продолжено; ответ всё ещё доступен |
| ask.pendingDetail | These pending questions remain answerable from the composer. | На эти вопросы можно ответить из поля ввода. |
| ask.reopen | Answer | Ответить |
| ask.review | View answers | Посмотреть ответы |
| ask.rowTitle | Ask question | Задать вопрос |
| ask.skipped | Not answered | Без ответа |
| ask.waiting | waiting | ожидание |
| attachment.directoryDesktopOnly | Folders can only be added in the desktop app; add individual files in the browser | Папки можно добавлять только в настольном приложении; в браузере добавляйте отдельные файлы |
| attachment.dropBlocked | Files and images cannot be added right now | Сейчас нельзя добавлять файлы и изображения |
| attachment.dropDesc | Image limit: up to {count} images, {size} each | Лимит изображений: до {count}, по {size} каждое |
| attachment.dropTitle | Drag files or images here to add them | Перетащите сюда файлы или изображения, чтобы добавить их |
| attachment.pathUnavailable | Could not obtain the folder path; drag it in again | Не удалось получить путь к папке; перетащите её ещё раз |
| attachment.pathUnsupported | The path contains characters a reference cannot carry; rename it and try again | Путь содержит символы, которые нельзя передать в ссылке; переименуйте и повторите |
| attachment.pending | Pending attachments | Ожидающие вложения |
| attachment.scrollLeft | Scroll attachments left | Прокрутить вложения влево |
| attachment.scrollRight | Scroll attachments right | Прокрутить вложения вправо |
| bash.failed | Failed | Ошибка |
| bash.running | Running | Выполняется |
| bash.stopped | Stopped | Остановлено |
| command.attachmentsUnsupported | /{command} does not accept attachments; remove them first | /{command} не принимает вложения; сначала удалите их |
| context.aria | {percent} of context used | Использовано контекста: {percent} |
| context.messages | Messages | Сообщения |
| context.system | System prompt | Системный промпт |
| context.tools | Tool definitions | Определения инструментов |
| context.used | of context used | контекста использовано |
| detail.agent.reply | Agent response | Ответ агента |
| detail.agents.count | {count} agents | Агентов: {count} |
| detail.days | {count} d | {count} дн. |
| detail.empty | No results | Нет результатов |
| detail.event.neighbors | Surrounding events | Соседние события |
| detail.field.agent | Agent ID | ID агента |
| detail.field.agents | Agents started | Запущено агентов |
| detail.field.availability | Availability | Доступность |
| detail.field.bestMatch | Best match | Лучшее совпадение |
| detail.field.callId | Call ID | ID вызова |
| detail.field.content | Content | Содержимое |
| detail.field.context | Context | Контекст |
| detail.field.currentPackage | Current package | Текущий пакет |
| detail.field.data | Data | Данные |
| detail.field.dependencies | Dependencies | Зависимости |
| detail.field.depth | Depth | Глубина |
| detail.field.diagnostics | Diagnostics | Диагностика |
| detail.field.exitCode | Exit code | Код выхода |
| detail.field.id | ID | ID |
| detail.field.inputSchema | Input schema | Схема входа |
| detail.field.job | Job ID | ID задания |
| detail.field.latestRun | Latest run | Последний запуск |
| detail.field.message | Message | Сообщение |
| detail.field.messageId | Message ID | ID сообщения |
| detail.field.methods | Methods | Методы |
| detail.field.model | Model | Модель |
| detail.field.nextPackage | Next package | Следующий пакет |
| detail.field.outputSchema | Output schema | Схема выхода |
| detail.field.owner | Owner | Владелец |
| detail.field.packages | Packages | Пакеты |
| detail.field.parent | Parent | Родитель |
| detail.field.pid | Process ID | ID процесса |
| detail.field.platform | Platform | Платформа |
| detail.field.previousStatus | Previous status | Предыдущий статус |
| detail.field.processGroup | Process group | Группа процессов |
| detail.field.props | Props | Свойства |
| detail.field.provider | Provider | Провайдер |
| detail.field.ready | Ready | Готово |
| detail.field.registrations | Registrations | Регистрации |
| detail.field.result | Result | Результат |
| detail.field.revision | Revision | Ревизия |
| detail.field.role | Role | Роль |
| detail.field.root | Root | Корень |
| detail.field.seq | Event sequence | Последовательность событий |
| detail.field.signal | Signal | Сигнал |
| detail.field.source | Source | Источник |
| detail.field.step | Step | Шаг |
| detail.field.surface | Record status | Статус записи |
| detail.field.target | Target event | Целевое событие |
| detail.field.task | Task | Задача |
| detail.field.time | Time | Время |
| detail.field.turn | Turn | Ход |
| detail.field.type | Type | Тип |
| detail.field.warnings | Warnings | Предупреждения |
| detail.field.writeScopes | Write scopes | Области записи |
| detail.goal.active | Active | Активна |
| detail.goal.blocked | Blocked | Заблокирована |
| detail.goal.complete | Completed | Завершена |
| detail.goal.disarmed | Awaiting continuation | Ожидает продолжения |
| detail.goal.empty | No goal | Нет цели |
| detail.goal.paused | Paused | Приостановлена |
| detail.goal.reason | Blocker | Причина блокировки |
| detail.goal.rounds | Rounds | Раунды |
| detail.hours | {count} h | {count} ч |
| detail.jobs.count | {count} background jobs | {count} фоновых заданий |
| detail.location | Line {line}, column {column} | Строка {line}, столбец {column} |
| detail.locations.count | {count} locations | {count} местоположений |
| detail.matches.capped | Result limit reached; narrow the search for more | Достигнут лимит результатов; уточните поиск, чтобы увидеть больше |
| detail.matches.count | {count} matches | {count} совпадений |
| detail.minutes | {count} min | {count} мин |
| detail.models.title | Available models | Доступные модели |
| detail.moreInInspect | {count} more items available in Inspect | Ещё {count} элементов доступно в режиме просмотра |
| detail.no | No | Нет |
| detail.none | None | Нет |
| detail.output.lines | Lines {begin}–{end} of {total} | Строки {begin}–{end} из {total} |
| detail.output.truncated | Output truncated | Вывод обрезан |
| detail.plugins.count | {count} dynamic plugins | {count} динамических плагинов |
| detail.providers.count | {count} inspect providers | {count} провайдеров просмотра |
| detail.ralph.limit | Round limit reached | Достигнут лимит раундов |
| detail.ralph.reportedBlocker | Worker reported a blocker | Исполнитель сообщил о блокировке |
| detail.ralph.reportedComplete | Worker reported completion | Исполнитель сообщил о завершении |
| detail.receipt.alreadyFinished | Already finished | Уже завершено |
| detail.receipt.cancel | Cancellation requested | Запрошена отмена |
| detail.receipt.closed | Closed | Закрыто |
| detail.receipt.closing | Closing | Закрывается |
| detail.receipt.delivered | Message delivered | Сообщение доставлено |
| detail.receipt.interrupt | Interrupt requested | Запрошено прерывание |
| detail.receipt.signal | Signal delivered | Сигнал доставлен |
| detail.receipt.started | Started | Запущено |
| detail.recordedResult | Recorded result | Записанный результат |
| detail.report.nextSteps | Remaining work | Оставшаяся работа |
| detail.schedule.count | {count} reminders | {count} напоминаний |
| detail.schedule.cron | Cron {expression} ({zone}) | Cron {expression} ({zone}) |
| detail.schedule.daily | Every day at {time} ({zone}) | Каждый день в {time} ({zone}) |
| detail.schedule.deleted | Deleted | Удалено |
| detail.schedule.empty | No reminders | Нет напоминаний |
| detail.schedule.every | Every {interval} | Каждые {interval} |
| detail.schedule.frequency | Repeat | Повтор |
| detail.schedule.once | Once | Однократно |
| detail.schedule.overdue | Overdue, awaiting session resume | Просрочено, ожидает возобновления сессии |
| detail.schedule.scheduled | Scheduled | Запланировано |
| detail.schedule.weekly | Weekly on {days} at {time} ({zone}) | Еженедельно по {days} в {time} ({zone}) |
| detail.schedule.when | Scheduled for | Запланировано на |
| detail.seconds | {count} s | {count} с |
| detail.state | Status | Статус |
| detail.status.accepted | Accepted | Принято |
| detail.status.completed | Completed | Завершено |
| detail.status.deleted | Deleted | Удалено |
| detail.status.exited | Exited | Завершено |
| detail.status.failed | Failed | Ошибка |
| detail.status.idle | Idle | Ожидание |
| detail.status.inactive | Inactive | Неактивно |
| detail.status.killed | Cancelled | Отменено |
| detail.status.provisioning | Provisioning | Подготовка |
| detail.status.queued | Queued | В очереди |
| detail.status.ready | Ready | Готово |
| detail.status.running | Running | Выполняется |
| detail.tasks.count | {count} team tasks | {count} командных задач |
| detail.tasks.nextPage | More tasks available; next cursor is {cursor} | Есть ещё задачи; следующий курсор — {cursor} |
| detail.terminals.count | {count} terminals | {count} терминалов |
| detail.todo.completed | Completed | Завершено |
| detail.todo.empty | The to-do list is empty | Список задач пуст |
| detail.todo.in_progress | In progress | В работе |
| detail.todo.pending | Pending | Ожидает |
| detail.trace.ancestors | Ancestor sessions | Родительские сессии |
| detail.trace.derived | Derived events | Производные события |
| detail.trace.descendants | Descendant sessions | Дочерние сессии |
| detail.trace.replacedBy | Replaced by | Заменено на |
| detail.trace.replacementChain | Replacement chain | Цепочка замен |
| detail.trace.replaces | Replaced events | Заменённые события |
| detail.trace.sources | Source events | Исходные события |
| detail.wait.changed | Change detected | Обнаружено изменение |
| detail.wait.noProgress | No active subagents | Нет активных субагентов |
| detail.wait.timeout | Wait timed out | Время ожидания истекло |
| detail.wait.title | Subagent activity | Активность субагентов |
| detail.weekday.1 | Mon | Пн |
| detail.weekday.2 | Tue | Вт |
| detail.weekday.3 | Wed | Ср |
| detail.weekday.4 | Thu | Чт |
| detail.weekday.5 | Fri | Пт |
| detail.weekday.6 | Sat | Сб |
| detail.weekday.7 | Sun | Вс |
| detail.weekday.join | ,  | ,  |
| detail.workflow.script | Workflow script | Скрипт рабочего процесса |
| detail.yes | Yes | Да |
| details.running | Running… | Выполняется… |
| diff.collapseAria | Collapse diff | Свернуть различия |
| diff.expandAria | Expand {count} more diff lines | Показать ещё {count} строк различий |
| diff.expandRest | … {count} more lines | … ещё {count} строк |
| error.sessionInUse | This session is already in use, possibly by another running DSH instance (such as dsh web or the desktop app). Quit other running DSH instances and try again. | Эта сессия уже используется, возможно, другим запущенным экземпляром DSH (например, dsh web или настольным приложением). Закройте другие экземпляры DSH и попробуйте снова. |
| file.label | File | Файл |
| file.notStaged | The file has not finished uploading; re-add it and try again | Файл ещё не загружен; добавьте его снова и повторите |
| file.pending | Pending files | Файлы в ожидании |
| file.remove | Remove file {name} | Удалить файл {name} |
| file.retry | Retry uploading {name} | Повторить загрузку {name} |
| file.sessionUnavailable | Session unavailable; files cannot be uploaded | Сессия недоступна; загрузка файлов невозможна |
| file.stillUploading | Files are still uploading; send after they finish | Файлы ещё загружаются; отправьте после завершения |
| file.uploadFailed | Upload failed; click to retry | Ошибка загрузки; нажмите, чтобы повторить |
| file.uploading | Uploading… | Загрузка… |
| hero.chooseWorkspace | Choose workspace | Выбрать рабочую область |
| hero.headline | Into the Unknown | В неизвестность |
| hero.preview | Preview | Предпросмотр |
| hint.goal | describe the objective for a long-running task | опишите цель для длительной задачи |
| hint.goal.active | goal active — edit / pause / resume / clear | цель активна — изменить / пауза / продолжить / очистить |
| hint.plan | describe your task to generate plan | опишите задачу, чтобы создать план |
| image.closePreview | Close original image preview | Закрыть просмотр оригинала |
| image.dimensionTooLarge | Image sides must be at most {size}px; downscale it and try again | Стороны изображения должны быть не больше {size}px; уменьшите его и повторите |
| image.fileTooLarge | Each image must be smaller than {size} | Каждое изображение должно быть меньше {size} |
| image.label | Image | Изображение |
| image.loadFailed | Image failed to load; click to retry | Не удалось загрузить изображение; нажмите, чтобы повторить |
| image.loading | Loading image… | Загрузка изображения… |
| image.modelUnsupported | The current model does not support images; switch to a model that does | Текущая модель не поддерживает изображения; переключитесь на модель с поддержкой |
| image.openOriginal | View original | Открыть оригинал |
| image.openOriginalLabel | {label}, click to view original | {label}, нажмите, чтобы открыть оригинал |
| image.original | Original image | Оригинал изображения |
| image.pending | Pending images | Изображения в ожидании |
| image.preview | Original image preview | Просмотр оригинала изображения |
| image.remove | Remove image {name} | Удалить изображение {name} |
| image.sendFailed | Sending images failed ({reason}); re-add them and try again | Не удалось отправить изображения ({reason}); добавьте их снова и повторите |
| image.tooMany | A message can include up to {count} images | В сообщение можно добавить до {count} изображений |
| image.tooManyPixels | Image resolution is too high; compress it and try again | Разрешение изображения слишком высокое; сожмите его и повторите |
| image.totalTooLarge | Images exceed {size} in total; remove some and try again | Изображения в сумме превышают {size}; удалите некоторые и повторите |
| image.unsupportedType | Only PNG, JPG, WebP, and GIF images are supported | Поддерживаются только изображения PNG, JPG, WebP и GIF |
| input.commands | Add files or run commands | Добавить файлы или выполнить команды |
| input.file | File | Файл |
| input.send | Send message | Отправить сообщение |
| input.send.queue | Queue message | Поставить сообщение в очередь |
| input.send.steer | Steer message | Направить сообщение |
| input.stop | Stop generating | Остановить генерацию |
| placeholder.default | Message or run a task, / commands, @ files or sessions | Сообщение или задача, / команды, @ файлы или сессии |
| placeholder.hero | Describe what you want to build, / commands, @ files or sessions | Опишите, что хотите создать, / команды, @ файлы или сессии |
| placeholder.parentOffline | Parent session offline; sending is unavailable but you can still stop the run | Родительская сессия недоступна; отправка невозможна, но вы можете остановить выполнение |
| placeholder.plan | describe your task to generate plan | опишите задачу, чтобы создать план |
| placeholder.steerQueue | Cmd/Ctrl+Enter steers all queued messages | Cmd/Ctrl+Enter направляет все сообщения из очереди |
| placeholder.unavailable | Session unavailable | Сессия недоступна |
| placeholder.workspace | Choose a workspace to start | Выберите рабочую область для начала |
| queue.cancelEdit | Cancel editing | Отменить редактирование |
| queue.count | {n} queued messages | {n} сообщений в очереди |
| queue.edit | Edit queued message | Редактировать сообщение в очереди |
| queue.edit.unsupported | Contains non-text content; editing is not supported yet | Содержит нетекстовое содержимое; редактирование пока не поддерживается |
| queue.editFailed | Edit failed: this message may have already started sending. | Не удалось изменить: возможно, сообщение уже начало отправляться. |
| queue.file | Queued file {name} | Файл в очереди {name} |
| queue.image | Queued message image | Изображение из сообщения в очереди |
| queue.remove | Remove queued message | Удалить сообщение из очереди |
| queue.removeFailed | Removal failed: this message may have already started sending. | Не удалось удалить: возможно, сообщение уже начало отправляться. |
| queue.save | Save queued message | Сохранить сообщение в очереди |
| queue.sending | Sending… | Отправка… |
| queue.steer | Steer queued message | Направить сообщение из очереди |
| queue.steer.unavailable | Steering is available only while the agent is running | Направлять можно, только пока агент работает |
| queue.steerFailed | Steering failed. Try again. | Не удалось направить. Повторите попытку. |
| read.collapseAria | Collapse content | Свернуть содержимое |
| read.expandAria | Expand {count} more lines | Показать ещё {count} строк |
| read.expandRest | … {count} more lines | … ещё {count} строк |
| read.window | Showing {shown} of {total} lines | Показано {shown} из {total} строк |
| row.commandArguments | Command arguments | Аргументы команды |
| row.failed | Failed | Ошибка |
| row.imageSize | {width}x{height}px, {bytes} bytes | {width}x{height}px, {bytes} байт |
| row.imageSizeDownscaled | {width}x{height}px (downscaled from {originalWidth}x{originalHeight}px), {bytes} bytes | {width}x{height}px (уменьшено с {originalWidth}x{originalHeight}px), {bytes} байт |
| row.input | IN | Вход |
| row.inspect | Inspect | Подробнее |
| row.output | OUT | Выход |
| row.preparing | Preparing tool call | Подготовка вызова инструмента |
| row.running | Running | Выполняется |
| row.stopped | Stopped | Остановлено |
| search.collapseAria | Collapse results | Свернуть результаты |
| search.expandAria | Expand {count} more result lines | Показать ещё {count} строк результатов |
| search.expandRest | … {count} more lines | … ещё {count} строк |
| search.matches | {shown} matches · {files} files | {shown} совпадений · {files} файлов |
| search.matches.truncated | Showing {shown} of {total} matches · {files} files | Показано {shown} из {total} совпадений · {files} файлов |
| search.noResults | No results | Нет результатов |
| search.paths | {shown} paths | {shown} путей |
| search.paths.truncated | Showing {shown} of {total} paths | Показано {shown} из {total} путей |
| session.hierarchy | Session hierarchy | Иерархия сессий |
| session.moreViews | More conversation views | Другие представления беседы |
| settings.enter.description | What Enter and the Send button do while the agent is running; Cmd/Ctrl+Enter uses the other behavior | Что делают Enter и кнопка отправки, пока агент работает; Cmd/Ctrl+Enter выполняет противоположное действие |
| settings.enter.queue | Queue | В очередь |
| settings.enter.steer | Steer | Направить |
| settings.enter.title | Send behavior while busy | Поведение отправки при занятости |
| shortcut.complementary | Use the complementary Queue / Steer action | Использовать противоположное действие «В очередь» / «Направить» |
| shortcut.mention | Open reference menu | Открыть меню упоминаний |
| shortcut.newline | New line | Новая строка |
| shortcut.slash | Open command menu | Открыть меню команд |
| terminal.collapseAria | Collapse output | Свернуть вывод |
| terminal.commandLine | Command line {n} | Командная строка {n} |
| terminal.done | Done | Готово |
| terminal.exitCode | exit code {code} | код выхода {code} |
| terminal.expandAria | Expand the remaining {n} output lines | Показать оставшиеся {n} строк вывода |
| terminal.expandRest | … {n} more lines | … ещё {n} строк |
| terminal.failed | Failed | Ошибка |
| terminal.noExitCode | no exit code | нет кода выхода |
| terminal.noOutput | No output | Нет вывода |
| terminal.running | Running | Выполняется |
| terminal.sendInput | (send input) | (отправить ввод) |
| terminal.session | Terminal {sessionId} | Терминал {sessionId} |
| terminal.signal | signal {signal} | сигнал {signal} |
| todo.completed | {done}/{total} completed | {done}/{total} выполнено |
| todo.diff.added | {count} added | {count} добавлено |
| todo.diff.addedItem | Added | Добавлено |
| todo.diff.compare | Changes since the previous list | Изменения с предыдущего списка |
| todo.diff.initial | Initial list | Исходный список |
| todo.diff.movedItem | Reordered | Перемещено |
| todo.diff.noChanges | No changes to the list | Список не изменился |
| todo.diff.removed | {count} removed | {count} удалено |
| todo.diff.removedItem | Removed | Удалено |
| todo.diff.unavailable | Previous list unavailable | Предыдущий список недоступен |
| todo.diff.unchanged | {count} unchanged | {count} без изменений |
| todo.diff.updated | {count} updated | {count} обновлено |
| todo.diff.updatedItem | Status changed | Статус изменён |
| todo.progress.active | {active} in progress | {active} в работе |
| todo.progress.done | {done} completed | {done} выполнено |
| todo.progress.pending | {pending} pending | {pending} в ожидании |
| todo.rowTitle | Update to-do list | Обновить список задач |
| todo.status.completed | Completed | Выполнено |
| todo.status.inProgress | In progress | В работе |
| todo.status.pending | Pending | Ожидает |
| todo.title | To-dos | Задачи |
| tool.autoReviewNotExecuted | Tool was not executed. Reason: {reason} | Инструмент не был выполнен. Причина: {reason} |
| tool.autoReviewReasonFallback | Auto review did not authorize this action | Автопроверка не разрешила это действие |
| tool.autoReviewRejected | Rejected by Auto review | Отклонено автопроверкой |
| tool.preparing.content | {kilobytes}KB | {kilobytes} КБ |
| tool.title.bash | Bash | Bash |
| tool.title.closeTerminal | Close terminal | Закрыть терминал |
| tool.title.code | Code | Код |
| tool.title.createGoal | Create goal | Создать цель |
| tool.title.createSchedule | Create reminder | Создать напоминание |
| tool.title.createTeamTask | Create team task | Создать командную задачу |
| tool.title.deleteSchedule | Delete reminder | Удалить напоминание |
| tool.title.edit | Edit | Редактировать |
| tool.title.findDefinition | Find definition | Найти определение |
| tool.title.findImplementation | Find implementation | Найти реализацию |
| tool.title.findReferences | Find references | Найти ссылки |
| tool.title.generic | Tool call | Вызов инструмента |
| tool.title.getGoal | View goal | Просмотр цели |
| tool.title.getTeamTask | Read team task | Прочитать командную задачу |
| tool.title.glob | Glob | Glob |
| tool.title.grep | Grep | Grep |
| tool.title.hoverSymbol | Inspect symbol | Просмотр символа |
| tool.title.inspect | Query Cordis environment | Запрос окружения Cordis |
| tool.title.inspectPlugins | Inspect plugins | Просмотр плагинов |
| tool.title.inspectProviders | Inspect providers | Просмотр провайдеров |
| tool.title.interruptAgent | Interrupt agent | Прервать агента |
| tool.title.killJob | Cancel background job | Отменить фоновое задание |
| tool.title.listAgents | List subagents | Список субагентов |
| tool.title.listJobs | List background jobs | Список фоновых заданий |
| tool.title.listModels | List models | Список моделей |
| tool.title.listSchedules | List reminders | Список напоминаний |
| tool.title.listTeamTasks | List team tasks | Список командных задач |
| tool.title.listTerminals | List terminals | Список терминалов |
| tool.title.lsp | Query code symbols | Запрос символов кода |
| tool.title.openTerminal | Open terminal | Открыть терминал |
| tool.title.pwsh | Pwsh | Pwsh |
| tool.title.queryRuntime | Query runtime | Запрос среды выполнения |
| tool.title.ralph | Run ralph loop | Запустить цикл ralph |
| tool.title.read | Read | Чтение |
| tool.title.readEvent | Read event | Прочитать событие |
| tool.title.readImage | Read image | Прочитать изображение |
| tool.title.readJob | Read job output | Прочитать вывод задания |
| tool.title.readTerminal | Read terminal | Прочитать терминал |
| tool.title.removeCordis | Remove Cordis Plugin | Удалить плагин Cordis |
| tool.title.runCordis | Run Cordis Plugin | Запустить плагин Cordis |
| tool.title.search | Search | Поиск |
| tool.title.searchEvents | Search events | Поиск событий |
| tool.title.searchSessions | Search sessions | Поиск сессий |
| tool.title.sendMessage | Send message | Отправить сообщение |
| tool.title.signalTerminal | Signal terminal | Отправить сигнал терминалу |
| tool.title.spawnTeammate | Create teammate | Создать напарника |
| tool.title.stopCordis | Stop Cordis Plugin | Остановить плагин Cordis |
| tool.title.subagent | Create subagent | Создать субагента |
| tool.title.traceEvent | Trace event | Трассировать событие |
| tool.title.traceSession | Trace session | Трассировать сессию |
| tool.title.updateGoal | Update goal | Обновить цель |
| tool.title.updateSchedule | Update reminder | Обновить напоминание |
| tool.title.updateTeamTask | Update team task | Обновить командную задачу |
| tool.title.waitAgent | Wait for subagent | Ждать субагента |
| tool.title.webFetch | Fetch | Загрузка |
| tool.title.webSearch | Search | Поиск |
| tool.title.workflow | Run workflow | Запустить рабочий процесс |
| tool.title.write | Write | Запись |
| web.contentTruncated | Content truncated | Содержимое обрезано |
| web.http | HTTP | HTTP |
| web.noResults | No results found | Ничего не найдено |
| web.sourcesTruncated | Source list truncated | Список источников обрезан |

## cordis

| Ключ | English (original) | Русский |
|---|---|---|
| a11y.defining | Defining the plugin | Определение плагина |
| a11y.failed | Definition failed | Не удалось определить |
| a11y.preparing | Preparing a Cordis tool call | Подготовка вызова инструмента Cordis |
| a11y.stopped | Definition interrupted | Определение прервано |
| action.approve | Allow | Разрешить |
| action.approveOnce | Allow this version only | Разрешить только эту версию |
| action.approvePlugin | Allow future versions of this plugin | Разрешить будущие версии плагина |
| action.decline | Decline | Отклонить |
| action.inspect | Inspect | Подробнее |
| action.remove | Remove | Удалить |
| action.retry | Retry | Повторить |
| action.rollback | Roll back | Откатить |
| action.run | Run | Запустить |
| action.stop | Stop | Остановить |
| body.clientCode | Client | Клиент |
| body.copied | Copied | Скопировано |
| body.copy | Copy | Копировать |
| body.hostCode | Host | Хост |
| body.output | Result | Результат |
| body.source | Plugin source | Исходный код плагина |
| panel.approvals.aria | Cordis approvals | Подтверждения Cordis |
| panel.current | Current: {packageId} | Текущий: {packageId} |
| panel.empty | No plugins defined yet | Плагины пока не определены |
| panel.group.current | This session | Эта сессия |
| panel.group.others | Other sessions | Другие сессии |
| panel.hint | Run controls live in the Cordis panel above Settings | Элементы управления запуском находятся на панели Cordis над настройками |
| panel.loading | Reading… | Чтение… |
| panel.next | Next: {packageId} | Следующий: {packageId} |
| panel.plugins.aria | Cordis plugins | Плагины Cordis |
| panel.readFailed | Reading the plugin inventory failed: {message} | Не удалось прочитать список плагинов: {message} |
| panel.runningCount | {count} running | {count} запущено |
| panel.title | Cordis plugins | Плагины Cordis |
| panel.trigger | Cordis Plugin | Плагин Cordis |
| panel.version | Version | Версия |
| purpose.missing | (no purpose given) | (назначение не указано) |
| render.failedAbdicated | Rendering failed in {slot}; the default UI was restored: | Не удалось отрисовать {slot}; восстановлен интерфейс по умолчанию: |
| render.failedHeld | Rendering failed in {slot}: | Не удалось отрисовать {slot}: |
| row.defineTitle | Register Cordis Plugin | Зарегистрировать плагин Cordis |
| row.removeTitle | Remove Cordis Plugin | Удалить плагин Cordis |
| row.runTitle | Run Cordis Plugin | Запустить плагин Cordis |
| row.stopTitle | Stop Cordis Plugin | Остановить плагин Cordis |
| row.updateTitle | Update Cordis Plugin | Обновить плагин Cordis |
| run.removed | This package no longer exists | Этот пакет больше не существует |
| run.superseded | A newer run card is available below | Ниже доступна карточка более нового запуска |
| status.awaitingApproval | Awaiting approval | Ожидает подтверждения |
| status.clientPending | Client ready to activate | Клиент готов к активации |
| status.failed | Run failed | Запуск не удался |
| status.idle | Ready | Готово |
| status.removed | Removed | Удалено |
| status.running | Running | Выполняется |
| status.superseded | Newer run available | Доступен более новый запуск |

## cotTranslation

| Ключ | English (original) | Русский |
|---|---|---|
| anonymousNotice | Bing and Google need no translation login or API key. Their anonymous endpoints may reject or limit requests. | Bing и Google не требуют входа или ключа API для перевода. Их анонимные эндпоинты могут отклонять запросы или ограничивать их. |
| bing | Bing | Bing |
| codeTitle | Code block | Блок кода |
| copied | Copied | Скопировано |
| copy | Copy | Копировать |
| deepseekAccount | DeepSeek Flash — Account (paid) | DeepSeek Flash — аккаунт (платно) |
| deepseekOfficial | DeepSeek Flash — Official API (paid) | DeepSeek Flash — официальный API (платно) |
| failed | Translation failed. Showing the original. | Перевод не удался. Показан оригинал. |
| footnotes | Footnotes | Сноски |
| google | Google | Google |
| invalidLanguage | Enter auto or a language code, such as zh, en, or ja. | Введите auto или код языка, например zh, en или ja. |
| invalidProvider | Choose a translation service. | Выберите сервис перевода. |
| original | View original | Открыть оригинал |
| overridden | Overridden | Переопределено |
| paidNotice | Each uncached fragment sends a separate paid DeepSeek Flash request through the selected account or Official API credentials. Reopening reasoning reuses saved results; changing the provider, language, source text, or request settings may send a new paid request. | Каждый фрагмент без кеша отправляет отдельный платный запрос DeepSeek Flash через выбранный аккаунт или учётные данные Official API. Повторное открытие рассуждения использует сохранённые результаты; смена провайдера, языка, исходного текста или настроек запроса может отправить новый платный запрос. |
| privacy | Expanded reasoning is sent to the selected service. It may contain private code or conversation details. | Развёрнутое рассуждение отправляется в выбранный сервис. Оно может содержать приватный код или детали беседы. |
| provider | Translation service | Сервис перевода |
| providerUnavailable | This provider is unavailable. Configure your DeepSeek account or Official API provider, or choose an available service. | Этот провайдер недоступен. Настройте аккаунт DeepSeek или провайдер Official API либо выберите доступный сервис. |
| providerUnavailableOption | {provider} — unavailable | {provider} — недоступно |
| readOnly | This deployment stores settings read-only. | В этом развёртывании настройки хранятся только для чтения. |
| reset | Reset to default | Сбросить по умолчанию |
| retry | Retry | Повторить |
| save | Save | Сохранить |
| saveFailed | The deployment did not accept these values; they were left for you to correct. | Развёртывание не приняло эти значения; они оставлены для исправления. |
| saving | Saving… | Сохранение… |
| targetLanguage | Target language | Язык перевода |
| targetLanguageHint | auto follows the UI language; language codes such as zh, en, and ja also work. | auto следует языку интерфейса; также работают коды языков, например zh, en и ja. |
| translating | Translating reasoning | Перевод рассуждения |
| translation | View translation | Показать перевод |
| unavailable | Translation preferences are unavailable. | Настройки перевода недоступны. |
| unwrap | Unwrap lines | Не переносить строки |
| wrap | Wrap lines | Переносить строки |

## deepseek-model-label-1017

| Ключ | English (original) | Русский |
|---|---|---|
| badge.label | 1017 | 1017 |

## deliverables

| Ключ | English (original) | Русский |
|---|---|---|
| changes.added | +{count} | +{count} |
| changes.all | All {count} files | Все файлы ({count}) |
| changes.binary | binary | двоичный |
| changes.collapse | Collapse | Свернуть |
| changes.collapseAria | Collapse changed files | Свернуть изменённые файлы |
| changes.deleted | -{count} | -{count} |
| changes.expandAria | Show all {count} changed files | Показать все изменённые файлы ({count}) |
| changes.openReview | Review this turn’s changes in the sidebar | Просмотреть изменения этого хода в боковой панели |
| changes.oversized | too large | слишком большой |
| changes.singleTitle | Edited {name} | Изменён {name} |
| changes.title | Edited {count} files | Изменено файлов: {count} |
| changes.viewDiff | View changes to {name} | Посмотреть изменения в {name} |
| diff.binary | Binary file; changes cannot be shown | Двоичный файл; изменения нельзя показать |
| diff.coarse | Line comparison timed out; shown as a whole-file replacement | Сравнение строк не завершилось вовремя; показано как замена всего файла |
| diff.created | Created in this turn | Создан в этом ходе |
| diff.deleted | Deleted in this turn | Удалён в этом ходе |
| diff.error | Could not read the changes | Не удалось прочитать изменения |
| diff.loading | Reading changes… | Чтение изменений… |
| diff.missing | The contents of this turn’s changes are no longer available | Содержимое изменений этого хода больше недоступно |
| diff.oversized | File too large; changes cannot be shown | Файл слишком большой; изменения нельзя показать |
| diff.truncated | Showing the first {count} lines | Показаны первые {count} строк |
| diff.unchanged | Both sides hold the same lines | Обе стороны содержат одинаковые строки |
| presented.all | All {count} files | Все файлы ({count}) |
| presented.collapse | Collapse | Свернуть |
| presented.collapseAria | Collapse delivered files | Свернуть переданные файлы |
| presented.directoryError | Could not open containing folder. Try again. | Не удалось открыть папку с файлом. Повторите попытку. |
| presented.directoryOpened | Requested opening containing folder | Запрошено открытие папки с файлом |
| presented.directoryOpening | Opening containing folder… | Открытие папки с файлом… |
| presented.error | Could not open. Click to retry. | Не удалось открыть. Нажмите, чтобы повторить. |
| presented.expandAria | Show all {count} delivered files | Показать все переданные файлы ({count}) |
| presented.file | File | Файл |
| presented.hostError | Could not read the Host desktop information | Не удалось прочитать сведения о рабочем столе хоста |
| presented.nativeUnavailable | This file has no available Host path. Preview it in the sidebar. | У этого файла нет доступного пути хоста. Откройте предпросмотр в боковой панели. |
| presented.opened | Open requested | Открытие запрошено |
| presented.opening | Opening… | Открытие… |
| presented.preview | Preview in sidebar | Предпросмотр в боковой панели |
| presented.previewButton | Open {name} in sidebar | Открыть {name} в боковой панели |
| presented.previewCard | Preview {name} in sidebar | Предпросмотр {name} в боковой панели |
| presented.retry | Retry | Повторить |
| presented.revealError | Could not show in file manager. Try again. | Не удалось показать в файловом менеджере. Повторите попытку. |
| presented.revealed | Requested display in file manager | Запрошено отображение в файловом менеджере |
| presented.revealing | Showing in file manager… | Показ в файловом менеджере… |
| presented.unavailable | This Host has no desktop available to open files or folders in external apps. Files can still be previewed in the sidebar. | На этом хосте нет рабочего стола для открытия файлов и папок во внешних приложениях. Файлы по-прежнему можно просматривать в боковой панели. |
| review.nowrap | Disable line wrap | Отключить перенос строк |
| review.openFile | Open the whole file in the sidebar | Открыть весь файл в боковой панели |
| review.openFileAria | Open {name} in sidebar | Открыть {name} в боковой панели |
| review.selectFile | Choose the file to review | Выберите файл для просмотра |
| review.split | Switch to split view | Переключиться на разделённый вид |
| review.splitAria | Split view | Разделённый вид |
| review.title | Review · turn {turn} | Просмотр · ход {turn} |
| review.unified | Switch to unified view | Переключиться на объединённый вид |
| review.wrap | Enable line wrap | Включить перенос строк |
| review.wrapAria | Line wrap | Перенос строк |
| row.error | Delivery failed | Не удалось передать |
| row.inspect | Inspect call | Проверить вызов |
| row.ok | Delivered | Передано |
| row.preparing | Preparing deliverables | Подготовка результатов |
| row.running | Delivering | Передача |
| row.stopped | Interrupted | Прервано |
| row.title | Present files | Показать файлы |

## directory-browser

| Ключ | English (original) | Русский |
|---|---|---|
| browser.cancel | Cancel | Отмена |
| browser.create | Create | Создать |
| browser.createIn | New folder in "{name}" | Новая папка в "{name}" |
| browser.editPath | Edit path | Изменить путь |
| browser.folderName | Folder name | Имя папки |
| browser.home | Home | Домашняя папка |
| browser.loading | Loading… | Загрузка… |
| browser.newFolder | New folder | Новая папка |
| browser.open | Open | Открыть |
| browser.showHidden | Show hidden files | Показывать скрытые файлы |
| browser.title | Select Workspace Directory | Выберите папку рабочей области |
| browser.truncated | Too many folders to list; only the beginning is shown. | Слишком много папок для отображения; показано только начало. |
| browser.untitledFolder | Untitled folder | Папка без названия |

## documentHtml

| Ключ | English (original) | Русский |
|---|---|---|
| failed | This HTML document could not be previewed. | Не удалось показать предпросмотр этого HTML-документа. |
| frame | HTML document preview | Предпросмотр HTML-документа |
| loading | Rendering document... | Отрисовка документа... |
| title | HTML | HTML |

## documentMarkdown

| Ключ | English (original) | Русский |
|---|---|---|
| code.copied | Copied | Скопировано |
| code.copy | Copy | Копировать |
| footnotes | Footnotes | Сноски |
| viewer.label | Markdown | Markdown |

## entryCustomization

| Ключ | English (original) | Русский |
|---|---|---|
| create | Create your plugin | Создайте свой плагин |
| createPrompt.conversation | Create a DSH conversation view plugin. | Создай плагин просмотра диалога DSH. |
| createPrompt.rightbar | Create a DSH plugin with a right sidebar entry. | Создай плагин DSH с элементом в правой боковой панели. |
| createPrompt.sidebar | Create a DSH plugin with a left sidebar entry. | Создай плагин DSH с элементом в левой боковой панели. |
| install | Browse other plugins | Просмотреть другие плагины |

## feedback

| Ключ | English (original) | Русский |
|---|---|---|
| action.dislike | Bad response | Плохой ответ |
| action.dislikeActive | Remove rating | Убрать оценку |
| action.like | Good response | Хороший ответ |
| action.likeActive | Remove rating | Убрать оценку |
| category.instruction-following | Instruction understanding and following | Понимание и выполнение инструкций |
| category.other | Other | Другое |
| category.product-interaction | Product features and interaction | Возможности и взаимодействие с продуктом |
| category.resource-cost | Resource usage and cost | Расход ресурсов и стоимость |
| category.security-privacy-permission | Security, privacy, and permissions | Безопасность, конфиденциальность и разрешения |
| category.service-stability | Stability and speed | Стабильность и скорость |
| category.task-result | Task result | Результат задачи |
| dialog.categories | Feedback category | Категория отзыва |
| dialog.detail | Feedback details | Детали отзыва |
| dialog.hint | Add details to help us improve. Your submission will include the current conversation log. | Добавьте подробности, чтобы помочь нам стать лучше. В отправку войдёт журнал текущей беседы. |
| dialog.title | Submit feedback | Отправить отзыв |
| error.conflict | This feedback changed elsewhere; the latest state is shown | Этот отзыв изменён в другом месте; показано последнее состояние |
| error.generic | Could not save feedback | Не удалось сохранить отзыв |
| error.load | Could not load feedback | Не удалось загрузить отзыв |
| error.noteTooLarge | The description is too long; shorten it and submit again | Описание слишком длинное; сократите его и отправьте снова |
| toast.recorded | Thanks for your feedback | Спасибо за отзыв |

## goal

| Ключ | English (original) | Русский |
|---|---|---|
| action.cancel | Cancel edit | Отменить редактирование |
| action.clear | Clear goal | Очистить цель |
| action.edit | Edit goal | Редактировать цель |
| action.pause | Pause goal | Приостановить цель |
| action.resume | Resume goal | Возобновить цель |
| action.save | Save goal | Сохранить цель |
| commandInput.aria | Command input | Ввод команды |
| objective.aria | Goal objective | Задача цели |
| phase.active | Ongoing Goal | Активная цель |
| phase.active.disarmed | Inactive Goal | Неактивная цель |
| phase.blocked | Blocked Goal | Заблокированная цель |
| phase.paused | Paused Goal | Приостановленная цель |

## job

| Ключ | English (original) | Русский |
|---|---|---|
| count.idle.one | {count} background job | {count} фоновое задание |
| count.idle.other | {count} background jobs | {count} фоновых заданий |
| count.live.one | {count} background job running | {count} фоновое задание выполняется |
| count.live.other | {count} background jobs running | {count} фоновых заданий выполняется |
| duration.hours | {hours}h {minutes}m | {hours} ч {minutes} мин |
| duration.minutes | {minutes}m {seconds}s | {minutes} мин {seconds} с |
| duration.seconds | {seconds}s | {seconds} с |
| duration.title.done | Took {duration} | Заняло {duration} |
| duration.title.live | Running for {duration} | Выполняется {duration} |
| kill.confirm | Click again to confirm | Нажмите ещё раз для подтверждения |
| kill.confirmAction | Confirm stop | Подтвердить остановку |
| kill.failed | Stop failed | Не удалось остановить |
| kill.stop | Stop task {label} | Остановить задание {label} |
| list.aria | Background jobs | Фоновые задания |
| output.error | live output stream interrupted: {error} | поток вывода прерван: {error} |
| output.gap | … earlier output dropped … | … предыдущий вывод отброшен … |
| row.collapseAria | Hide live output of {label} | Скрыть текущий вывод {label} |
| row.expandAria | Show live output of {label} | Показать текущий вывод {label} |
| section.clear | Clear | Очистить |
| section.live | Running | Выполняется |
| section.settledCount | Finished {count} | Завершено: {count} |
| status.completed | completed | завершено |
| status.failed | failed | ошибка |
| status.killed | cancelled | отменено |
| status.running | running | выполняется |
| status.stopping | stopping | остановка |
| terminal.collapse | Collapse | Свернуть |
| terminal.collapseAria | Collapse output | Свернуть вывод |
| terminal.commandLine | Command line {n} | Командная строка {n} |
| terminal.copied | Copied | Скопировано |
| terminal.copy | Copy | Копировать |
| terminal.done | done | готово |
| terminal.exitCode | exit {code} | код выхода {code} |
| terminal.expand | Show {n} more lines | Показать ещё строк: {n} |
| terminal.expandAria | Expand {n} collapsed output lines | Развернуть скрытые строки вывода ({n}) |
| terminal.failed | failed | ошибка |
| terminal.noExitCode | no exit code | нет кода выхода |
| terminal.noOutput | (no output) | (нет вывода) |
| terminal.running | running | выполняется |
| terminal.signal | signal {signal} | сигнал {signal} |

## model

| Ключ | English (original) | Русский |
|---|---|---|
| action.reload | Reload | Обновить |
| command.description | Select the model for this conversation | Выберите модель для этой беседы |
| command.label | Model | Модель |
| effort.providerDefault | Default | По умолчанию |
| empty.efforts | This model provides no reasoning effort levels. | Эта модель не предоставляет уровни усилий рассуждения. |
| empty.models | No models available. | Нет доступных моделей. |
| error.action | Model operation failed: {message} | Не удалось выполнить операцию с моделью: {message} |
| error.sessionInUse | This session is already in use, possibly by another running DSH instance (such as dsh web or the desktop app). Quit other running DSH instances and try again. | Эта сессия уже используется, возможно, другим запущенным экземпляром DSH (например, dsh web или настольным приложением). Закройте другие запущенные экземпляры DSH и повторите попытку. |
| menu.aria | Model and reasoning effort | Модель и усилие рассуждения |
| menu.effort | Effort | Усилие |
| menu.model | Model | Модель |
| option.loadError | Catalog failed to load: {message} | Не удалось загрузить каталог: {message} |
| provider.account | DeepSeek Account | Аккаунт DeepSeek |
| search.clear | Clear search | Очистить поиск |
| search.empty | No matching models. | Подходящих моделей нет. |
| search.placeholder | Search models… | Поиск моделей… |
| status.loading | Refreshing model list… | Обновление списка моделей… |
| trigger.aria | Select model, current {model} | Выбрать модель, текущая: {model} |
| trigger.ariaEffort | Select model, current {model}, reasoning effort {effort} | Выбрать модель, текущая: {model}, усилие рассуждения: {effort} |
| trigger.fallback | Select model | Выбрать модель |
| trigger.loading | Loading models… | Загрузка моделей… |
| trigger.selectAria | Select model | Выбрать модель |
| warning.groupLoad | {name} failed to load: {message} | Не удалось загрузить {name}: {message} |

## open-in-app

| Ключ | English (original) | Русский |
|---|---|---|
| app.androidstudio | Android Studio | Android Studio |
| app.cursor | Cursor | Cursor |
| app.explorer | File Explorer | File Explorer |
| app.filemanager | Files | Files |
| app.finder | Finder | Finder |
| app.fork | Fork | Fork |
| app.ghostty | Ghostty | Ghostty |
| app.gitbash | Git Bash | Git Bash |
| app.github | GitHub Desktop | GitHub Desktop |
| app.gitkraken | GitKraken | GitKraken |
| app.gnometerminal | GNOME Terminal | GNOME Terminal |
| app.goland | GoLand | GoLand |
| app.intellij | IntelliJ IDEA | IntelliJ IDEA |
| app.iterm | iTerm2 | iTerm2 |
| app.kitty | kitty | kitty |
| app.konsole | Konsole | Konsole |
| app.phpstorm | PhpStorm | PhpStorm |
| app.pycharm | PyCharm | PyCharm |
| app.rider | Rider | Rider |
| app.rustrover | RustRover | RustRover |
| app.smartgit | SmartGit | SmartGit |
| app.sourcetree | Sourcetree | Sourcetree |
| app.sublimemerge | Sublime Merge | Sublime Merge |
| app.sublimetext | Sublime Text | Sublime Text |
| app.terminal | Terminal | Terminal |
| app.tower | Tower | Tower |
| app.vscode | VS Code | VS Code |
| app.vscodeinsiders | VS Code Insiders | VS Code Insiders |
| app.warp | Warp | Warp |
| app.webstorm | WebStorm | WebStorm |
| app.windowsterminal | Windows Terminal | Windows Terminal |
| app.windsurf | Windsurf | Windsurf |
| app.xcode | Xcode | Xcode |
| app.zed | Zed | Zed |
| open.title | Open in {app} | Открыть в {app} |
| open.tooltip | Open locally | Открыть локально |
| path.appDefault | {app} (default) | {app} (по умолчанию) |
| path.appsError | Could not load applications | Не удалось загрузить приложения |
| path.more | More ways to open | Другие способы открыть |
| path.open | Open | Открыть |
| path.openError | Could not open. Try again. | Не удалось открыть. Повторите попытку. |
| path.reveal | Show file location | Показать расположение файла |
| path.revealError | Could not show the file location. Try again. | Не удалось показать расположение файла. Повторите попытку. |
| shortcut.busy | Opening workspace | Открытие рабочей области |
| shortcut.unavailable | Current workspace or local application unavailable | Текущая рабочая область или локальное приложение недоступны |

## permission.access

| Ключ | English (original) | Русский |
|---|---|---|
| auto.badge | EXP | EXP |
| auto.confirm.acknowledge | I understand these risks and want to continue | Я понимаю эти риски и хочу продолжить |
| auto.confirm.description | Auto review runs without a sandbox. Before every native tool call and PTC inner call, the same model as the current agent reviews whether to allow it; you approve or reject each call it denies. This feature is experimental, can falsely allow or deny actions, and uses additional tokens. | Автопроверка выполняется без песочницы. Перед каждым вызовом нативного инструмента и внутренним вызовом PTC та же модель, что и у текущего агента, решает, разрешать ли вызов; вы одобряете или отклоняете каждый отклонённый ею вызов. Эта функция экспериментальная, может ошибочно разрешать или запрещать действия и расходует дополнительные токены. |
| auto.confirm.enable | Enable Auto review | Включить автопроверку |
| auto.confirm.title | Enable Auto review (experimental)? | Включить автопроверку (экспериментально)? |
| auto.description | Run without a sandbox after an experimental same-model review of every native tool call and PTC inner call. | Работа без песочницы после экспериментальной проверки той же моделью каждого вызова нативного инструмента и внутреннего вызова PTC. |
| auto.label | Auto review | Автопроверка |
| close | Close | Закрыть |
| confirm.acknowledge | I understand the risks and want to continue | Я понимаю риски и хочу продолжить |
| confirm.cancel | Cancel | Отмена |
| confirm.description | Full access reduces confirmation steps and lets the agent perform more actions directly, including sensitive operations, file changes, or external commands. Only use it when you trust the current task. | Полный доступ сокращает число шагов подтверждения и позволяет агенту выполнять больше действий напрямую, включая чувствительные операции, изменения файлов и внешние команды. Используйте его, только если доверяете текущей задаче. |
| confirm.enable | Enable Full access | Включить полный доступ |
| confirm.title | Enable Full access? | Включить полный доступ? |
| mode | Access mode, current: {name} | Режим доступа, текущий: {name} |
| preset.fullAccess | Full access | Полный доступ |
| preset.readOnly | Read Only | Только чтение |
| preset.workspaceWrite | Workspace Write | Запись в рабочей области |

## plan

| Ключ | English (original) | Русский |
|---|---|---|
| chip.exitFailed | Failed to exit plan mode | Не удалось выйти из режима плана |
| chip.label | Plan | План |
| chip.on.aria | Plan mode on, press to turn off | Режим плана включён, нажмите, чтобы выключить |
| chip.on.title | Plan mode on — click to turn off (/plan off) | Режим плана включён — нажмите, чтобы выключить (/plan off) |
| preview.action | Open | Открыть |
| preview.document | Plan · Markdown | План · Markdown |
| preview.expired | This temporary plan preview has expired. Reopen it from the pending review card. | Срок этого временного предпросмотра плана истёк. Откройте его заново из карточки ожидающей проверки. |
| preview.failed | Could not load plan | Не удалось загрузить план |
| preview.full | View full plan | Открыть полный план |
| preview.historyUnavailable | Session history is unavailable | История сессии недоступна |
| preview.invalidAddress | Invalid plan address | Недопустимый адрес плана |
| preview.loading | Loading plan… | Загрузка плана… |
| preview.notFound | This plan was not found | Этот план не найден |
| preview.open | Open plan in sidebar | Открыть план в боковой панели |
| preview.openNamed | Open plan: {title} | Открыть план: {title} |
| preview.title | Plan | План |
| preview.unavailable | Plan preview is unavailable | Предпросмотр плана недоступен |

## pluginManager

| Ключ | English (original) | Русский |
|---|---|---|
| addPlugin | Add plugin | Добавить плагин |
| backToList | Back to plugins | Назад к плагинам |
| backToPackage | Back to {name} | Назад к {name} |
| basicTitle | Built-in plugin settings | Настройки встроенных плагинов |
| bundlesTitle | Installed plugins | Установленные плагины |
| cancel | Cancel | Отмена |
| chooseAddMethod | Choose how to add a plugin | Выберите способ добавления плагина |
| close | Close | Закрыть |
| configureRow | Configure {name} | Настроить {name} |
| confirmUninstall | Uninstall | Удалить |
| confirmUninstallDescription | What it provides goes away once it is uninstalled. | После удаления всё, что он предоставляет, станет недоступно. |
| confirmUninstallTitle | Uninstall "{name}"? | Удалить "{name}"? |
| crumbRoot | Plugins | Плагины |
| empty | No plugins are installed yet. | Плагины пока не установлены. |
| enableToggle | Enable {name} | Включить {name} |
| error | Could not read all plugins, possibly due to a network problem | Не удалось прочитать все плагины, возможно, из-за проблемы с сетью |
| extensionsTitle | Experimental plugins | Экспериментальные плагины |
| failedDisable | Could not disable: {reason} | Не удалось отключить: {reason} |
| failedEnable | Could not enable: {reason} | Не удалось включить: {reason} |
| failedRowDisable | Could not disable the component: {reason} | Не удалось отключить компонент: {reason} |
| failedRowEnable | Could not enable the component: {reason} | Не удалось включить компонент: {reason} |
| failedUninstall | Could not uninstall: {reason} | Не удалось удалить: {reason} |
| infoDescription | Configure official plugins and install or manage other plugins here. View the built-in plugin list and runtime status in Settings → Built-in plugins. | Здесь можно настроить официальные плагины, а также установить или администрировать другие плагины. Список встроенных плагинов и состояние выполнения — в разделе «Настройки → Встроенные плагины». |
| infoLabel | About plugins | О плагинах |
| installApplying | Applying configuration, please wait… | Применение конфигурации, подождите… |
| installApplyingCancellationError | Cancellation was not confirmed. Installation is being applied; wait for its result. {reason} | Отмена не подтверждена. Установка применяется; дождитесь её результата. {reason} |
| installApprovalCaution | Allow only packages you trust. | Разрешайте только доверенные пакеты. |
| installApprovalConsequence | Once allowed, the scripts run here with your permissions, and the permission is saved in this profile. | После разрешения скрипты выполнятся здесь с вашими правами, а разрешение сохранится в этом профиле. |
| installApprovalDescription | These packages have install scripts that pnpm did not run. | У этих пакетов есть скрипты установки, которые pnpm не запускал. |
| installApprovalTitle | Install scripts need permission | Скриптам установки нужно разрешение |
| installApproveAndRetry | Allow these scripts and retry | Разрешить эти скрипты и повторить |
| installAttempt | {previous} could not serve the package; retrying through {registry} (registry {index} of {total}) | {previous} не смог отдать пакет; повтор через {registry} (реестр {index} из {total}) |
| installAttemptBadge | Attempt {index} · {registry} | Попытка {index} · {registry} |
| installAwaitingAcceptance | Waiting for the Host to accept installation. Cancellation will retry automatically after confirmation. | Ожидание принятия установки хостом. Отмена выполнится автоматически после подтверждения. |
| installBackgroundApplying | Installation is being applied and cannot be cancelled. View installation progress. | Установка применяется, отменить её нельзя. Посмотрите ход установки. |
| installBackgroundDone | Installation finished. View installation details. | Установка завершена. Посмотрите подробности установки. |
| installBackgroundFailed | Installation failed. View installation details. | Установка не удалась. Посмотрите подробности установки. |
| installBackgroundUnconfirmed | Installation status is unconfirmed. View the installation for details. | Состояние установки не подтверждено. Откройте установку, чтобы узнать подробности. |
| installBackgroundUnknown | Installation result unavailable. Check the plugin list. | Результат установки недоступен. Проверьте список плагинов. |
| installCancel | Cancel install | Отменить установку |
| installCancelAndEdit | Cancel installation and return to editing | Отменить установку и вернуться к редактированию |
| installCancelUnconfirmed | Installation has not been confirmed stopped. Retry cancellation or wait for the installation result. {reason} | Остановка установки не подтверждена. Повторите отмену или дождитесь результата установки. {reason} |
| installCancelled | Installation cancelled; the plugin is not enabled, and downloaded files may remain | Установка отменена; плагин не включён, а скачанные файлы могли остаться |
| installCancelledShort | Cancelled | Отменено |
| installCancelling | Stopping installation… | Остановка установки… |
| installChangeRegistry | Change registry | Сменить реестр |
| installChecking | Checking… | Проверка… |
| installClose | Done | Готово |
| installCloseCancels | Cancel install and close | Отменить установку и закрыть |
| installConfirmedRefused | This plugin cannot be installed | Этот плагин нельзя установить |
| installConfirmedTitle | Install plugin | Установить плагин |
| installDescription | Enter the plugin's package name, GitHub repository address, or local directory path. | Введите имя пакета плагина, адрес репозитория GitHub или путь к локальной папке. |
| installDetailsHide | Hide install details | Скрыть подробности установки |
| installDetailsShow | Show install details | Показать подробности установки |
| installDoneApproved | Install scripts allowed for {names} | Скрипты установки разрешены для {names} |
| installDoneNothing | Install finished with no new dependency. | Установка завершена, новых зависимостей нет. |
| installDoneOtherVersion | Under pnpm's supply-chain security policy (minimumReleaseAge), versions published more recently than the required age are not installed automatically, so this installation used {installed} instead of the latest version {version}. A newly published version has not completed this waiting period and may contain undetected malicious code or defects. If you need {version}, uninstall the current version and then install {exact} to request that version. | Согласно политике безопасности цепочки поставок pnpm (minimumReleaseAge), версии, опубликованные позже требуемого возраста, не устанавливаются автоматически, поэтому вместо последней версии {version} установлена {installed}. Недавно опубликованная версия не прошла этот период ожидания и может содержать необнаруженный вредоносный код или дефекты. Если вам нужна {version}, удалите текущую версию и установите {exact}, чтобы запросить её. |
| installDoneRestart | Installed; restart DSH to load it. {reason} | Установлено; перезапустите DSH, чтобы загрузить. {reason} |
| installEdit | Edit | Изменить |
| installEditAria | Back to editing | Назад к редактированию |
| installEnableNow | Enable now | Включить сейчас |
| installExisting | Install a third-party plugin | Установить сторонний плагин |
| installExistingDescription | Supports npm packages, Git repositories, and local directories | Поддерживаются пакеты npm, репозитории Git и локальные папки |
| installFailedTitle | The plugin could not be installed | Не удалось установить плагин |
| installFailureBuildBlocked | A dependency's install scripts need your permission before the install can continue | Для продолжения установки нужно разрешить скрипты установки зависимости |
| installFailureBuildBlockedManual | pnpm blocked install scripts; allow them under allowBuilds in pnpm-workspace.yaml and retry | pnpm заблокировал скрипты установки; разрешите их в allowBuilds в pnpm-workspace.yaml и повторите |
| installFailureDiskFull | The disk is full; the install stopped | Диск заполнен; установка остановлена |
| installFailureGeneric | Something went wrong during the install; the details say what | Во время установки что-то пошло не так; подробности указаны ниже |
| installFailureIntegrity | The downloaded package failed its integrity check | Скачанный пакет не прошёл проверку целостности |
| installFailureNetwork | The network connection failed | Сбой сетевого подключения |
| installFailureNetworkAll | No registry could be reached (tried: {registries}). Check the network or proxy settings, or change the registry and retry. | Не удалось подключиться ни к одному реестру (проверены: {registries}). Проверьте настройки сети или прокси либо смените реестр и повторите. |
| installFailureNetworkHost | {host} could not be reached. A GitHub address or a .tgz link is not fetched through the registry: this machine must reach it directly or through a proxy. If the plugin is also published to npm, enter its package name instead. | Не удалось подключиться к {host}. Адрес GitHub или ссылка .tgz не загружаются через реестр: этот компьютер должен обращаться к ним напрямую или через прокси. Если плагин также опубликован в npm, укажите вместо этого имя пакета. |
| installFailureNoMatchingVersion | No version matches the request | Нет версии, подходящей под запрос |
| installFailureNotFound | No such plugin was found | Такой плагин не найден |
| installFailurePermission | No write permission; the plugin cannot be installed | Нет прав на запись; плагин нельзя установить |
| installFailurePnpmMissing | pnpm was not found, so nothing can be installed | pnpm не найден, поэтому установка невозможна |
| installFailureTimeout | The install timed out | Время установки истекло |
| installGitTemplateHint | Replace this with the actual Git repository address. | Замените это на фактический адрес репозитория Git. |
| installGithubFailedDescription | Try another installation source. | Попробуйте другой источник установки. |
| installGithubFailedTitle | Cannot access GitHub | Нет доступа к GitHub |
| installGithubTimeoutTitle | GitHub connection timed out | Время подключения к GitHub истекло |
| installGuideExampleLabel | Example:  | Пример:  |
| installGuideFill | Use example | Использовать пример |
| installGuideFillAria | Use the example {example} | Использовать пример {example} |
| installGuideHide | Hide the guide | Скрыть руководство |
| installGuideIdExample | dsh-plugin-whale-pet | dsh-plugin-whale-pet |
| installGuideIdHint | The plugin package name is the npm package name (like dsh-xxx or @author/plugin): the part after dsh plugin add or pnpm add in a community plugin's README install command. | Имя пакета плагина — это имя npm-пакета (например, dsh-xxx или @author/plugin): часть после dsh plugin add или pnpm add в команде установки из README стороннего плагина. |
| installGuideIdTitle | Enter the plugin's npm package name | Введите имя npm-пакета плагина |
| installGuideSafety | Install only plugins you trust: they run with your permissions and can damage DeepSeek Harness or leak your data. | Устанавливайте только те плагины, которым доверяете: они работают с вашими правами и могут повредить DeepSeek Harness или раскрыть ваши данные. |
| installGuideToggle | Install guide and examples | Руководство по установке и примеры |
| installLocation | Installs into {dir} | Устанавливается в {dir} |
| installPackageLabel | Plugin package name | Имя пакета плагина |
| installPathTemplateHint | Replace this with the actual path to your local plugin directory. | Замените его фактическим путём к локальной папке плагина. |
| installProblemInstalled | This plugin is already installed. To upgrade it, uninstall it and install it again | Этот плагин уже установлен. Чтобы обновить его, удалите его и установите заново |
| installProblemInvalid | This is not a package name or address that can be installed: {reason} | Это не имя пакета и не адрес, которые можно установить: {reason} |
| installProblemNetwork | The plugin registry could not be reached; check the network and try again | Не удалось связаться с реестром плагинов; проверьте сеть и повторите попытку |
| installProblemNetworkAll | No registry could be reached (tried: {registries}); check the network or proxy settings, or change the registry | Не удалось связаться ни с одним реестром (проверены: {registries}); проверьте сеть или настройки прокси либо смените реестр |
| installProblemNotBundle | This package declares no bundle, so it cannot be installed as a plugin: {reason} | Пакет не объявляет bundle, поэтому его нельзя установить как плагин: {reason} |
| installProblemNotFound | No such plugin was found | Плагин не найден |
| installProblemNotPackage | The path does not exist or is not a valid plugin package | Путь не существует или не является допустимым пакетом плагина |
| installProblemShipped | This plugin ships with DSH; upgrading DSH updates it | Этот плагин входит в DSH; при обновлении DSH он обновляется |
| installProblemUnknown | The plugin could not be looked up: {reason} | Не удалось получить сведения о плагине: {reason} |
| installReconcile | Check installation status | Проверить статус установки |
| installResultUnconfirmed | The installation result was not received. Check installation status. {reason} | Результат установки не получен. Проверьте статус установки. {reason} |
| installRetry | Retry | Повторить |
| installRun | Install | Установить |
| installSpecLabel | Package name or address | Имя пакета или адрес |
| installSpecPlaceholder | for example dsh-plugin-whale-pet | например, dsh-plugin-whale-pet |
| installStarting | Preparing installation… | Подготовка к установке… |
| installSubjectGit | Git repository | Git-репозиторий |
| installSubjectPath | Local directory | Локальная папка |
| installSubjectTarball | Tarball | Архив tar |
| installTitle | Add plugin | Добавить плагин |
| installTryAnotherWay | Try another way | Попробовать другой способ |
| installUnconfirmedTitle | Installation status unconfirmed | Статус установки не подтверждён |
| installUnknownDescription | The Host has no active installation with this request id. Check the plugin list before trying again. | В Host нет активной установки с таким id запроса. Проверьте список плагинов, прежде чем повторять попытку. |
| installUnknownTitle | Installation result unavailable | Результат установки недоступен |
| installUpgradeNotice | On-demand Official plugins offer Update when their version differs from DSH. To update other plugins, uninstall and reinstall them. | Официальные плагины по требованию предлагают «Обновить», когда их версия отличается от DSH. Чтобы обновить другие плагины, удалите и установите их заново. |
| installUseGithubMirror | Use mainland China mirror | Использовать зеркало для Китая |
| installVersion | Version {version} | Версия {version} |
| installViewTask | View installation | Открыть установку |
| installedTab | Installed | Установленные |
| installedTitle | Installed | Установленные |
| installingTitle | Installing the plugin… | Установка плагина… |
| intro | Install, enable, and configure plugins | Установка, включение и настройка плагинов |
| loading | Reading plugins… | Чтение плагинов… |
| metadataError | Package metadata error: {error} | Ошибка метаданных пакета: {error} |
| moreAction | More | Ещё |
| moreTitle | Experimental plugins | Экспериментальные плагины |
| openDetail | View {name} | Открыть {name} |
| overriddenNotice | {name} was saved, but a higher-priority configuration overrides it, so it is not in effect | {name} сохранён, но его перекрывает конфигурация с более высоким приоритетом, поэтому он не действует |
| panel | Plugins | Плагины |
| partOff | Off | Выкл. |
| partToggle | Enable component {name} | Включить компонент {name} |
| partsCountFailed | {count} failed | {count} с ошибкой |
| partsCountOff | {count} off | {count} выкл. |
| partsCountRunning | {count} running | {count} работают |
| partsCountTotal | {count} total | всего {count} |
| partsEmpty | This plugin pack contains no components. | В этом наборе плагинов нет компонентов. |
| partsFilter | Filter components | Фильтр компонентов |
| partsFilterEmpty | No component matches. | Нет подходящих компонентов. |
| partsLabel | Components | Компоненты |
| previewAlt | {name} feature preview | Предпросмотр функции {name} |
| previewUnavailable | Could not display feature preview | Не удалось показать предпросмотр функции |
| reasonAlreadyInstalled | This package is already installed; uninstall it before installing another version. | Этот пакет уже установлен; удалите его перед установкой другой версии. |
| reasonAmbiguousInstall | Which package was installed cannot be told from the dependency change. | По изменению зависимостей нельзя определить, какой пакет был установлен. |
| reasonBundleInUse | Other configuration still uses this bundle's components; switch them off first. | Другая конфигурация всё ещё использует компоненты этого bundle; сначала отключите их. |
| reasonIncompatibleInstall | Install a plugin version compatible with this DSH. | Установите версию плагина, совместимую с этим DSH. |
| reasonIncompatibleInstalled | Uninstall it and install a version compatible with this DSH. | Удалите его и установите версию, совместимую с этим DSH. |
| reasonIncompatibleVersion | {plugin} is incompatible with DSH {runtime} (requires {requirements}); running it may cause crashes or data loss. | {plugin} несовместим с DSH {runtime} (требуется {requirements}); его запуск может привести к сбоям или потере данных. |
| reasonIncompatibleVersionUnnamed | This plugin is incompatible with the running DSH version; running it may cause crashes or data loss. | Этот плагин несовместим с запущенной версией DSH; его запуск может привести к сбоям или потере данных. |
| reasonInvalidSpec | Enter a valid package name or address. | Введите корректное имя пакета или адрес. |
| reasonLabel | Reason | Причина |
| reasonManagementRequired | Plugin management needs it; it cannot be switched off or uninstalled. | Он нужен управлению плагинами; его нельзя отключить или удалить. |
| reasonNotBundle | This package declares no bundle, so it cannot be managed as a plugin. | Пакет не объявляет bundle, поэтому им нельзя управлять как плагином. |
| reasonNotRemovable | This package is not owned by the profile, or plugin management needs it. | Этот пакет не принадлежит профилю или нужен управлению плагинами. |
| reasonOperationError | The Host reported an error. | Host сообщил об ошибке. |
| reasonStaleApproval | The pending script approvals changed; install again to refresh them. | Ожидающие подтверждения скриптов изменились; установите заново, чтобы обновить их. |
| reasonStopProfile | This profile runs without HMR; stop it and uninstall the package with dsh plugin. | Этот профиль работает без HMR; остановите его и удалите пакет с помощью dsh plugin. |
| reasonUnaddressable | The profile patch cannot address this one uniquely. | Патч профиля не может однозначно адресовать этот элемент. |
| reasonUnknownPlugin | No such plugin. | Такого плагина нет. |
| refresh | Refresh | Обновить |
| refreshError | Refresh failed. Please try again. | Не удалось обновить. Повторите попытку. |
| registryCustom | Custom address | Свой адрес |
| registryCustomHint | Enter an internal or private npm registry address starting with http:// or https://. If it requires a login, store the credentials in ~/.npmrc on this machine. | Введите адрес внутреннего или частного реестра npm, начинающийся с http:// или https://. Если требуется вход, сохраните учётные данные в ~/.npmrc на этой машине. |
| registryCustomInvalid | Enter an address starting with http:// or https:// | Введите адрес, начинающийся с http:// или https:// |
| registryCustomPlaceholder | https://npm.example.com/ | https://npm.example.com/ |
| registryDefault | Default registry | Реестр по умолчанию |
| registryLegend | The npm registry the plugin is downloaded from | Реестр npm, из которого скачивается плагин |
| registryListSeparator | ,  | ,  |
| registryNpmmirror | Mainland China mirror | Зеркало для Китая |
| registryOfficial | Official npm registry | Официальный реестр npm |
| registryToggle | Registry | Реестр |
| restartNotice | Restart DSH to apply the change. {reason} | Перезапустите DSH, чтобы применить изменение. {reason} |
| restartReasonHostModule | The change reaches modules DSH itself loaded. | Изменение затрагивает модули, загруженные самим DSH. |
| restartReasonModuleComparison | DSH could not compare the loaded plugins with their files. | DSH не удалось сравнить загруженные плагины с их файлами. |
| restartReasonNoHmr | This profile applies changes only at startup. | Этот профиль применяет изменения только при запуске. |
| restartReasonPackageMoved | An installed package now resolves to another directory, or the change replaces a package the DSH installation provides. Uninstall a package before installing it from another location. | Установленный пакет теперь указывает на другую папку, или изменение заменяет пакет, поставляемый с DSH. Удалите пакет, прежде чем устанавливать его из другого места. |
| restartReasonUnmanagedPlugin | The change reaches a plugin running outside the plugin list. | Изменение затрагивает плагин, работающий вне списка плагинов. |
| retry | Retry | Повторить |
| rowPhaseActive | Running | Работает |
| rowPhaseFailed | Problem | Проблема |
| rowPhaseLoading | Loading | Загрузка |
| rowPhasePending | Waiting for dependencies | Ожидание зависимостей |
| rowPhaseUnloading | Unloading | Выгрузка |
| rowStateIdle | Not running | Не запущен |
| sentenceSeparator |   |   |
| sourceBuiltIn | Built in | Встроенный |
| sourceNotInstalled | Not installed | Не установлен |
| sourceSpec | Code source | Источник кода |
| sourceTargetSpec | Source for this DSH | Источник для этого DSH |
| sourceTargetVersion | Version for this DSH | Версия для этого DSH |
| sourceTitle | Source | Источник |
| sourceVersion | Current version | Текущая версия |
| statusBeta | Experimental | Экспериментальный |
| statusMissingFiles | Package unavailable | Пакет недоступен |
| statusNotInstalled | Not installed | Не установлен |
| statusProblem | Problem | Проблема |
| statusUpdateAvailable | Update available | Доступно обновление |
| tabsLabel | Plugin views | Разделы плагинов |
| terminalCollapse | Collapse | Свернуть |
| terminalCollapseAria | Collapse output | Свернуть вывод |
| terminalCommandLine | Command line {n} | Командная строка {n} |
| terminalCopied | Copied | Скопировано |
| terminalCopy | Copy | Копировать |
| terminalDone | Done | Готово |
| terminalExitCode | exit code {code} | код выхода {code} |
| terminalExpand | … {n} more lines | … ещё строк: {n} |
| terminalExpandAria | Expand the remaining {n} output lines | Развернуть оставшиеся строки вывода: {n} |
| terminalFailed | Failed | Ошибка |
| terminalNoExitCode | no exit code | нет кода выхода |
| terminalNoOutput | No output | Нет вывода |
| terminalRunning | Running | Выполняется |
| terminalSignal | signal {signal} | сигнал {signal} |
| title | Plugins | Плагины |
| unavailable | This deployment runs without a manageable profile, so plugins cannot be installed or switched here. | В этом развёртывании нет управляемого профиля, поэтому здесь нельзя устанавливать или включать плагины. |
| uninstall | Uninstall | Удалить |
| uninstallLabel | Uninstall {name} | Удалить {name} |
| update | Update | Обновить |
| updateLabel | Update {name} | Обновить {name} |
| versionTag | v{version} | v{version} |

## pluginMarket

| Ключ | English (original) | Русский |
|---|---|---|
| addFirstSource | Add index source | Добавить источник индекса |
| addSource | Add | Добавить |
| allCategories | All | Все |
| backToList | Discover | Обзор |
| cancel | Cancel | Отмена |
| categoriesLabel | Categories | Категории |
| close | Close | Закрыть |
| confirmTitle | Install "{name}"? | Установить «{name}»? |
| emptyDescription | Add a plugin market index to browse and install its plugins here. | Добавьте индекс рынка плагинов, чтобы просматривать и устанавливать его плагины здесь. |
| emptyIndex | This index lists no plugins. | В этом индексе нет плагинов. |
| emptyTitle | No plugin markets yet | Рынков плагинов пока нет |
| entryMeta | {version} · {date} | {version} · {date} |
| entryMetaAuthor | {version} · {author} · {date} | {version} · {author} · {date} |
| exempted | This version is not compatible with the running DSH, but you set a compatibility exemption for it. | Эта версия несовместима с запущенным DSH, но для неё задано исключение по совместимости. |
| factAuthor | Author | Автор |
| factCategory | Category | Категория |
| factCommit | Commit | Коммит |
| factDirectory | Directory | Папка |
| factHomepage | Homepage | Домашняя страница |
| factLabels | Labels | Метки |
| factMarket | Plugin market | Рынок плагинов |
| factPackage | Package | Пакет |
| factPublished | Published | Опубликовано |
| factRegistry | Registry | Реестр |
| factRepository | Repository | Репозиторий |
| factSource | Source | Источник |
| factSourceCode | Source code | Исходный код |
| filter | Labels | Метки |
| filterCount | Labels · {count} | Метки · {count} |
| incompatible | This version is not compatible with the running DSH {runtime}; it requires DSH {range}. | Эта версия несовместима с запущенным DSH {runtime}; требуется DSH {range}. |
| install | Install | Установить |
| installTitle | Install {name} | Установить {name} |
| installTrust | Plugins run on this machine with your permissions. Make sure you trust where this one comes from. | Плагины работают на этой машине с вашими правами. Убедитесь, что доверяете источнику этого плагина. |
| installVersionTitle | Install {name} {version} | Установить {name} {version} |
| loading | Reading the index | Чтение индекса |
| manageSources | Manage index sources… | Управление источниками индекса… |
| marketMenu | Switch plugin market, currently {market} | Сменить рынок плагинов, текущий: {market} |
| noCompatibleVersion | No version is compatible with DSH {runtime} | Нет версии, совместимой с DSH {runtime} |
| noMatches | No plugins match. | Нет подходящих плагинов. |
| openEntry | View {name} | Открыть {name} |
| openInstalled | View {name} in Installed | Открыть {name} в «Установленных» |
| readChanged | This index changed while loading. | Индекс изменился во время загрузки. |
| readFailed | Could not read this index. | Не удалось прочитать этот индекс. |
| readInvalid | This index is not in a valid format. | Индекс имеет недопустимый формат. |
| refresh | Refresh | Обновить |
| removeSource | Remove | Удалить |
| removeSourceNamed | Remove {url} | Удалить {url} |
| retry | Retry | Повторить |
| search | Search plugins | Поиск плагинов |
| showMore | Show more | Показать ещё |
| sortBy | Sort: {sort} | Сортировка: {sort} |
| sortDefault | Default order | По умолчанию |
| sortPublished | Publish date | Дата публикации |
| sortRelevance | Best match | Лучшее совпадение |
| sourceDuplicate | This index source is already added. | Этот источник индекса уже добавлен. |
| sourceFailed | Could not save the index sources. | Не удалось сохранить источники индекса. |
| sourceInvalid | Use an http or https address without a user name, password, or # fragment. | Используйте адрес http или https без имени пользователя, пароля и фрагмента #. |
| sourcePlaceholder | https://example.com/index.json | https://example.com/index.json |
| sourceUnavailable | Index sources cannot be saved here. | Здесь нельзя сохранять источники индекса. |
| sourceUrl | Index URL | URL индекса |
| sourcesDescription | A plugin market is published as the URL of one index file. Discover browses the indexes listed here. | Рынок плагинов публикуется как URL одного файла индекса. «Обзор» показывает индексы, перечисленные здесь. |
| sourcesFailed | Could not read the index sources. | Не удалось прочитать источники индекса. |
| sourcesLabel | Added index sources | Добавленные источники индекса |
| sourcesTitle | Index sources | Источники индекса |
| sourcesTrust | Indexes come from third parties. Add only sources you trust: their plugins run with your permissions once installed. | Индексы берутся у третьих сторон. Добавляйте только те источники, которым доверяете: их плагины после установки работают с вашими правами. |
| statusInstalled | Installed | Установлен |
| statusProvided | Provided by DSH | Предоставлен DSH |
| statusUpdate | Update available | Доступно обновление |
| switchToAscending | Sort ascending | Сортировать по возрастанию |
| switchToDescending | Sort descending | Сортировать по убыванию |
| title | Discover | Обзор |
| versionDefault | Recommended | Рекомендуемая |
| versionExempted | Exempted | Исключение |
| versionIncompatible | Incompatible | Несовместима |
| versionInstalled | Installed | Установлена |
| versionPrerelease | Prerelease | Предварительная |
| versionsLabel | Versions of {name} | Версии {name} |
| versionsTitle | Versions | Версии |

## question

| Ключ | English (original) | Русский |
|---|---|---|
| action.next | Next | Далее |
| action.skip | Skip | Пропустить |
| custom.placeholder | Type your answer | Введите ответ |
| error.incomplete | Please complete this question first. | Сначала ответьте на этот вопрос. |
| error.resubmit | The answer did not arrive before work continued; submit it again. | Ответ не пришёл до продолжения работы; отправьте его ещё раз. |
| error.unanswered | Please select an option or enter a custom answer. | Выберите вариант или введите свой ответ. |
| error.unavailable | Cannot submit right now; try again in a moment. | Сейчас отправить нельзя; повторите попытку через момент. |
| nav.cancel | Dismiss all questions | Отклонить все вопросы |
| nav.close | Close the panel — reopen it from the tool call | Закрыть панель — открыть её снова можно из вызова инструмента |
| nav.maximize | Expand the question card | Развернуть карточку вопроса |
| nav.minimize | Collapse the question card | Свернуть карточку вопроса |
| nav.next | Next question | Следующий вопрос |
| nav.prev | Previous question | Предыдущий вопрос |
| option.recommended | Recommended | Рекомендуемый |
| plan.approve | Approve | Принять |
| plan.decline | Refuse | Отклонить |
| plan.discuss | Request changes | Запросить изменения |
| plan.header | Plan review | Проверка плана |
| reply.answerLabel | Answer:  | Ответ:  |
| reply.close | Close question details | Закрыть подробности вопроса |
| reply.label | Reply to earlier pending questions | Ответ на предыдущие ожидающие вопросы |
| reply.open | Open question details | Открыть подробности вопроса |
| reply.skipped | Skipped | Пропущено |
| review.skipped | This question was skipped. | Этот вопрос был пропущен. |
| review.status | Answered | Есть ответ |
| status.sent | Reply sent; the panel could not close. | Ответ отправлен; панель не удалось закрыть. |
| wait.continued | Work continued — you can still answer | Работа продолжилась — вы всё ещё можете ответить |
| wait.countdown | Continuing in {seconds}s | Продолжение через {seconds} с |
| wait.held | Waiting until you answer | Ожидание вашего ответа |
| wait.paused | Paused · {seconds}s remaining | Пауза · осталось {seconds} с |
| wait.takeTime | Take time | Не торопитесь |

## reference

| Ключ | English (original) | Русский |
|---|---|---|
| candidate.noCwd | (no cwd) | (нет cwd) |
| crumb.root | Workspace | Рабочая область |
| fileOpen.close | Close | Закрыть |
| fileOpen.failed | Couldn’t open “{path}”. Try again or close this message. | Не удалось открыть «{path}». Повторите попытку или закройте это сообщение. |
| fileOpen.retry | Retry | Повторить |
| fileOpen.title | Couldn’t open file | Не удалось открыть файл |
| section.files | Files & folders | Файлы и папки |
| section.sessions | Sessions | Сессии |
| section.subagents | Subagents | Субагенты |
| time.days | {n}d | {n} д |
| time.hours | {n}h | {n} ч |
| time.minutes | {n}min | {n} мин |
| time.months | {n}mo | {n} мес |
| time.now | now | сейчас |
| time.years | {n}y | {n} г |

## schedule.catalog

| Ключ | English (original) | Русский |
|---|---|---|
| cron.day.both | Day {days} of every month or {weekdays}{months} | День {days} каждого месяца или {weekdays}{months} |
| cron.day.bothStarred | Day {days} of every month and {weekdays}{months} | День {days} каждого месяца и {weekdays}{months} |
| cron.day.every | Every day{months} | Каждый день{months} |
| cron.day.monthDays | Day {days} of every month{months} | День {days} каждого месяца{months} |
| cron.day.weekdays | {weekdays}{months} | {weekdays}{months} |
| cron.hours.list | {hours} | {hours} |
| cron.hours.range | {from}–{to} | {from}–{to} |
| cron.list.join | ,  | ,  |
| cron.months |  in {months} |  в {months} |
| cron.part.join |   |   |
| cron.time.at | at {times} | в {times} |
| cron.time.everyHour | Every hour | Каждый час |
| cron.time.everyMinute | Every minute | Каждую минуту |
| cron.time.everyMinutes | Every {step} minutes | Каждые {step} мин |
| cron.time.everyNHours | Every {count} hours | Каждые {count} ч |
| cron.time.hourlyAt | Every hour at minute {minutes} | Каждый час в минуту {minutes} |
| cron.time.hoursAt | at minute {minutes} of hours {hours} | в минуту {minutes} часов {hours} |
| cron.time.hoursEveryMinute | every minute during hours {hours} | каждую минуту в часы {hours} |
| cron.time.hoursEveryMinutes | every {step} minutes during hours {hours} | каждые {step} мин в часы {hours} |
| cron.time.joinedEveryHour | every hour | каждый час |
| cron.time.joinedEveryMinute | every minute | каждую минуту |
| cron.time.joinedEveryMinutes | every {step} minutes | каждые {step} мин |
| cron.time.joinedEveryNHours | every {count} hours | каждые {count} ч |
| cron.time.joinedHourlyAt | every hour at minute {minutes} | каждый час в минуту {minutes} |
| cron.weekday.name | {weekday} | {weekday} |
| cron.weekday.range | {from}–{to} | {from}–{to} |
| delete.action | Delete | Удалить |
| delete.label | Delete reminder: {title} | Удалить напоминание: {title} |
| delete.pending | Deleting… | Удаление… |
| frequency.cron | Cron {expression} ({timeZone}) | Cron {expression} ({timeZone}) |
| frequency.cronLocal | Cron {expression} | Cron {expression} |
| frequency.cronRule | {rule} ({timeZone}) | {rule} ({timeZone}) |
| frequency.daily | Daily at {time} ({timeZone}) | Ежедневно в {time} ({timeZone}) |
| frequency.dailyLocal | Daily at {time} | Ежедневно в {time} |
| frequency.every | Every {value} {unit} | Каждые {value} {unit} |
| frequency.once | Once | Один раз |
| frequency.weekday.1 | Mon | Пн |
| frequency.weekday.2 | Tue | Вт |
| frequency.weekday.3 | Wed | Ср |
| frequency.weekday.4 | Thu | Чт |
| frequency.weekday.5 | Fri | Пт |
| frequency.weekday.6 | Sat | Сб |
| frequency.weekday.7 | Sun | Вс |
| frequency.weekday.join | ,  | ,  |
| frequency.weekly | Weekly on {weekdays} at {time} ({timeZone}) | Еженедельно ({weekdays}) в {time} ({timeZone}) |
| frequency.weeklyLocal | Weekly on {weekdays} at {time} | Еженедельно ({weekdays}) в {time} |
| hover.more | {count} more | ещё {count} |
| list.aria | Active reminders | Активные напоминания |
| list.error | Could not load reminders. | Не удалось загрузить напоминания. |
| list.loading | Loading reminders… | Загрузка напоминаний… |
| list.nextRun | Next run | Следующий запуск |
| list.open | Open reminder details: {title} | Открыть напоминание: {title} |
| list.retry | Retry | Повторить |
| mark.aria | {count} scheduled tasks | Запланированных задач: {count} |
| relative.future | in {value} {unit} | через {value} {unit} |
| relative.now | Due now | Срок сейчас |
| relative.overdue | {value} {unit} overdue | просрочено на {value} {unit} |
| time.locale | en | en |
| time.utcPrefix | UTC | UTC |
| trigger.label | Reminders | Напоминания |
| trigger.one | {count} reminder | {count} напоминание |
| trigger.other | {count} reminders | {count} напоминаний |
| unit.day.one | day | день |
| unit.day.other | days | дней |
| unit.hour.one | hour | час |
| unit.hour.other | hours | часов |
| unit.minute.one | minute | минута |
| unit.minute.other | minutes | минут |
| unit.second.one | second | секунда |
| unit.second.other | seconds | секунд |

## schedule.manager

| Ключ | English (original) | Русский |
|---|---|---|
| card.deleted | Deleted | Удалено |
| card.open | Open | Открыть |
| card.openLabel | Open task details: {title} | Открыть задачу: {title} |
| cron.day.both | Day {days} of every month or {weekdays}{months} | День {days} каждого месяца или {weekdays}{months} |
| cron.day.bothStarred | Day {days} of every month and {weekdays}{months} | День {days} каждого месяца и {weekdays}{months} |
| cron.day.every | Every day{months} | Каждый день{months} |
| cron.day.monthDays | Day {days} of every month{months} | День {days} каждого месяца{months} |
| cron.day.weekdays | {weekdays}{months} | {weekdays}{months} |
| cron.hours.list | {hours} | {hours} |
| cron.hours.range | {from}–{to} | {from}–{to} |
| cron.list.join | ,  | ,  |
| cron.months |  in {months} |  в {months} |
| cron.part.join |   |   |
| cron.time.at | at {times} | в {times} |
| cron.time.everyHour | Every hour | Каждый час |
| cron.time.everyMinute | Every minute | Каждую минуту |
| cron.time.everyMinutes | Every {step} minutes | Каждые {step} мин |
| cron.time.everyNHours | Every {count} hours | Каждые {count} ч |
| cron.time.hourlyAt | Every hour at minute {minutes} | Каждый час в минуту {minutes} |
| cron.time.hoursAt | at minute {minutes} of hours {hours} | в минуту {minutes} часов {hours} |
| cron.time.hoursEveryMinute | every minute during hours {hours} | каждую минуту в часы {hours} |
| cron.time.hoursEveryMinutes | every {step} minutes during hours {hours} | каждые {step} мин в часы {hours} |
| cron.time.joinedEveryHour | every hour | каждый час |
| cron.time.joinedEveryMinute | every minute | каждую минуту |
| cron.time.joinedEveryMinutes | every {step} minutes | каждые {step} мин |
| cron.time.joinedEveryNHours | every {count} hours | каждые {count} ч |
| cron.time.joinedHourlyAt | every hour at minute {minutes} | каждый час в минуту {minutes} |
| cron.weekday.name | {weekday} | {weekday} |
| cron.weekday.range | {from}–{to} | {from}–{to} |
| cronForm.atMinute | At minute | В минуту |
| cronForm.daily | Every day | Каждый день |
| cronForm.dateOption | Day {day} | День {day} |
| cronForm.dates | On dates | По датам |
| cronForm.frequency | Frequency | Частота |
| cronForm.minuteDecrease | Decrease minute | Уменьшить минуту |
| cronForm.minuteIncrease | Increase minute | Увеличить минуту |
| cronForm.monthly | Monthly | Ежемесячно |
| cronForm.weekly | Weekly | Еженедельно |
| delete.action | Delete task | Удалить задачу |
| delete.cancel | Cancel | Отмена |
| delete.close | Close deletion confirmation | Закрыть подтверждение удаления |
| delete.confirm | Confirm deletion | Подтвердить удаление |
| delete.description | This stops the task from triggering and deletes it together with its saved delivery records. The original session and its messages remain; queued messages are not withdrawn. | Задача перестанет срабатывать и будет удалена вместе со своими сохранёнными записями о доставке. Исходная сессия и её сообщения останутся; сообщения в очереди не отзываются. |
| delete.pending | Deleting… | Удаление… |
| delete.title | Delete this task? | Удалить эту задачу? |
| delivery.collapse | Collapse | Свернуть |
| delivery.cursorError | Records were updated. | Записи были обновлены. |
| delivery.empty | No delivery record available | Нет доступных записей о доставке |
| delivery.error | Could not load delivery records. | Не удалось загрузить записи о доставке. |
| delivery.expand | Expand | Развернуть |
| delivery.label | Saved delivery record | Сохранённая запись о доставке |
| delivery.loadMore | Load more | Загрузить ещё |
| delivery.loading | Loading delivery records… | Загрузка записей о доставке… |
| delivery.notFound | This task is no longer available. | Эта задача больше недоступна. |
| delivery.pruned | Earlier delivery records have been cleared | Более ранние записи о доставке удалены |
| delivery.refresh | Refresh | Обновить |
| delivery.retention | Retention rules | Правила хранения |
| delivery.retentionBounds | Each task keeps up to {records} delivery records from the last {days} days. | Каждая задача хранит до {records} записей о доставке за последние {days} дн. |
| delivery.retentionExplanation | When a new record is saved, older records outside these limits are cleared automatically. Clearing records does not stop the task. | При сохранении новой записи более старые записи за пределами этих ограничений удаляются автоматически. Удаление записей не останавливает задачу. |
| delivery.retry | Retry | Повторить |
| detail.close | Close details | Закрыть подробности |
| detail.frequency | Frequency | Частота |
| detail.id | Task ID | ID задачи |
| detail.instruction | Automation task instruction | Инструкция задачи автоматизации |
| detail.label | Task details | Подробности задачи |
| detail.missing | Task unavailable. It may have been deleted. | Задача недоступна. Возможно, она была удалена. |
| detail.more | Automation task actions | Действия с задачей автоматизации |
| detail.name | Automation task name | Название задачи автоматизации |
| detail.next | Next scheduled time | Следующее запланированное время |
| detail.nextRun | Next run | Следующий запуск |
| detail.openSession | Linked session: open original session | Связанная сессия: открыть исходную сессию |
| detail.openSessionTitle | Linked session {title}: open original session | Связанная сессия {title}: открыть исходную сессию |
| detail.records | Records | Записи |
| detail.rule | Rules | Правила |
| detail.session | Linked session | Связанная сессия |
| detail.sessionArchived | The original session is archived. | Исходная сессия заархивирована. |
| detail.sessionLoading | Loading original session information. | Загрузка сведений об исходной сессии. |
| detail.sessionUnavailable | The original session is unavailable. | Исходная сессия недоступна. |
| detail.status | Status | Статус |
| detail.tabs | Task detail views | Представления подробностей задачи |
| empty.action | New automation task | Новая задача автоматизации |
| frequency.cron | Cron {expression} ({timeZone}) | Cron {expression} ({timeZone}) |
| frequency.cronLocal | Cron {expression} | Cron {expression} |
| frequency.cronRule | {rule} ({timeZone}) | {rule} ({timeZone}) |
| frequency.daily | Daily at {time} ({timeZone}) | Ежедневно в {time} ({timeZone}) |
| frequency.dailyLocal | Daily at {time} | Ежедневно в {time} |
| frequency.every | Every {value} {unit} | Каждые {value} {unit} |
| frequency.once | Once | Однократно |
| frequency.weekday.1 | Mon | Пн |
| frequency.weekday.2 | Tue | Вт |
| frequency.weekday.3 | Wed | Ср |
| frequency.weekday.4 | Thu | Чт |
| frequency.weekday.5 | Fri | Пт |
| frequency.weekday.6 | Sat | Сб |
| frequency.weekday.7 | Sun | Вс |
| frequency.weekday.join | ,  | ,  |
| frequency.weekly | Weekly on {weekdays} at {time} ({timeZone}) | Еженедельно по {weekdays} в {time} ({timeZone}) |
| frequency.weeklyLocal | Weekly on {weekdays} at {time} | Еженедельно по {weekdays} в {time} |
| list.empty | No tasks yet. Tasks created in your sessions appear here. | Задач пока нет. Задачи, созданные в ваших сессиях, появятся здесь. |
| list.emptyInactive | No inactive automation tasks | Нет неактивных задач автоматизации |
| list.error | Could not load tasks. | Не удалось загрузить задачи. |
| list.label | Task catalog | Каталог задач |
| list.loading | Loading tasks… | Загрузка задач… |
| list.nextPrefix | Next scheduled time:  | Следующее запланированное время:  |
| list.noMatches | No matching tasks | Подходящих задач нет |
| list.retry | Retry | Повторить |
| new.action | New | Создать |
| panel | Automation tasks | Задачи автоматизации |
| relative.future | in {value} {unit} | через {value} {unit} |
| relative.now | Due now | Уже пора |
| relative.overdue | {value} {unit} overdue | просрочено на {value} {unit} |
| rule.cancel | Cancel | Отмена |
| rule.cron | Custom | Своё |
| rule.cronInvalid | Enter a five-field cron expression, for example 0 9 * * 1-5. | Введите cron-выражение из пяти полей, например 0 9 * * 1-5. |
| rule.cronLabel | Cron expression | Cron-выражение |
| rule.daily | Every day | Каждый день |
| rule.error.conflict | This task changed before the update was saved. The row shows the saved rule; try again. | Задача изменилась до сохранения обновления. В строке показано сохранённое правило; попробуйте ещё раз. |
| rule.error.notFound | This task is no longer available. | Эта задача больше недоступна. |
| rule.error.unknown | Could not confirm the rule update. The row shows the saved rule. | Не удалось подтвердить обновление правила. В строке показано сохранённое правило. |
| rule.everyHours | Every N hours | Каждые N часов |
| rule.everyMinutes | Every N minutes | Каждые N минут |
| rule.everySeconds | Every N seconds | Каждые N секунд |
| rule.invalidPrompt | Enter a task instruction. | Введите инструкцию задачи. |
| rule.invalidTitle | Enter a task name of at most 120 characters. | Введите название задачи не длиннее 120 символов. |
| rule.once | Once | Однократно |
| rule.repeat | Repeat | Повтор |
| rule.save | Save changes | Сохранить изменения |
| rule.saving | Saving… | Сохранение… |
| rule.title | Run time | Время запуска |
| rule.unsaved | Unsaved changes | Несохранённые изменения |
| rule.weekday | Weekday | День недели |
| rule.weekdayOption | Weekday {weekday} | День недели {weekday} |
| rule.weekdays | Monday to Friday | С понедельника по пятницу |
| rule.weekly | Weekly | Еженедельно |
| rule.zone.system |  (system) |  (системная) |
| search.clear | Clear search | Очистить поиск |
| search.label | Search tasks | Поиск задач |
| search.placeholder | Search automation tasks | Поиск задач автоматизации |
| status.active | Enabled | Включена |
| status.inactive | Inactive | Неактивна |
| statusFilter.all | All | Все |
| statusFilter.label | Task status | Статус задачи |
| time.locale | en | en |
| time.utcPrefix | UTC | UTC |
| timing.conflict | This task changed while you were editing. Your draft is retained. Cancel and reopen after refresh to edit the latest rule. | Задача изменилась во время редактирования. Ваш черновик сохранён. Отмените и откройте заново после обновления, чтобы изменить актуальное правило. |
| timing.date | Date | Дата |
| timing.error | Could not confirm the timing update. Your draft is retained. Check the task before retrying. | Не удалось подтвердить обновление времени. Ваш черновик сохранён. Проверьте задачу перед повторной попыткой. |
| timing.hour | Hour | Час |
| timing.inactive | Inactive tasks are read-only. Their timing cannot be edited. | Неактивные задачи доступны только для чтения. Их время нельзя изменить. |
| timing.interval | Repeat every | Повторять каждые |
| timing.intervalDecrease | Decrease interval | Уменьшить интервал |
| timing.intervalHint.hour | At least 1 hour. The interval counts from task creation or the last rule change and is independent of time zones. | Не менее 1 часа. Интервал отсчитывается от создания задачи или последнего изменения правила и не зависит от часовых поясов. |
| timing.intervalHint.minute | At least 1 minute. The interval counts from task creation or the last rule change and is independent of time zones. | Не менее 1 минуты. Интервал отсчитывается от создания задачи или последнего изменения правила и не зависит от часовых поясов. |
| timing.intervalHint.second | At least 60 seconds. The interval counts from task creation or the last rule change and is independent of time zones. | Не менее 60 секунд. Интервал отсчитывается от создания задачи или последнего изменения правила и не зависит от часовых поясов. |
| timing.intervalIncrease | Increase interval | Увеличить интервал |
| timing.invalid | Enter a valid date and time, or check the timing fields. | Введите корректные дату и время или проверьте поля времени. |
| timing.invalidInterval | Enter an interval of at least 1 minute. | Введите интервал не менее 1 минуты. |
| timing.invalidInterval.hour | Enter an interval of at least 1 hour. | Введите интервал не менее 1 часа. |
| timing.invalidInterval.minute | Enter an interval of at least 1 minute. | Введите интервал не менее 1 минуты. |
| timing.invalidInterval.second | Enter an interval of at least 60 seconds. | Введите интервал не менее 60 секунд. |
| timing.invalidZone | Enter a valid IANA time zone, for example Asia/Shanghai. | Введите корректный часовой пояс IANA, например Asia/Shanghai. |
| timing.minute | Minute | Минута |
| timing.nextMonth | Next month | Следующий месяц |
| timing.notFound | This task is no longer available. Your draft is retained; cancel to close the editor. | Эта задача больше недоступна. Ваш черновик сохранён; отмените, чтобы закрыть редактор. |
| timing.notFuture | Choose a date and time in the future. | Выберите дату и время в будущем. |
| timing.prevMonth | Previous month | Предыдущий месяц |
| timing.second | Second | Секунда |
| timing.subagentSession | This session belongs to a sub-agent, which never receives delivered reminders. | Эта сессия принадлежит субагенту, который никогда не получает доставленные напоминания. |
| timing.time | Time | Время |
| timing.unit.hour | hours | ч |
| timing.unit.minute | minutes | мин |
| timing.unit.second | seconds | сек |
| timing.zone | Time zone | Часовой пояс |
| timing.zoneNoResults | No matching time zones | Подходящих часовых поясов нет |
| timing.zoneNoStored | A one-time task stores only its target moment, not a time zone. The date and time are interpreted in the selected time zone. | Однократная задача хранит только целевой момент, а не часовой пояс. Дата и время интерпретируются в выбранном часовом поясе. |
| timing.zoneSearch | Search by UTC offset, IANA ID, or city | Поиск по смещению UTC, идентификатору IANA или городу |
| title | Automation tasks | Задачи автоматизации |
| toast.deleteFailed | Could not delete the task. | Не удалось удалить задачу. |
| toast.deleted | Task deleted. | Задача удалена. |
| tool.invoked | Invoked {name} | Вызван {name} |
| unit.day.one | day | дн. |
| unit.day.other | days | дн. |
| unit.hour.one | hour | ч |
| unit.hour.other | hours | ч |
| unit.minute.one | minute | мин |
| unit.minute.other | minutes | мин |
| unit.second.one | second | сек |
| unit.second.other | seconds | сек |

## secretMask

| Ключ | English (original) | Русский |
|---|---|---|
| secret.hide | Hide secret | Скрыть секрет |
| secret.reveal | Show secret | Показать секрет |

## session-inspector

| Ключ | English (original) | Русский |
|---|---|---|
| filter.apply | Apply filter | Применить фильтр |
| filter.cancel | Cancel | Отмена |
| filter.candidates | Type suggestions | Подсказки типов |
| filter.clear | Clear | Очистить |
| filter.context | Parent context of a matching record | Родительский контекст подходящей записи |
| filter.failed | Type suggestions could not be loaded. | Не удалось загрузить подсказки типов. |
| filter.help | Contains matching (*keyword*). Enter confirms; Esc cancels. | Содержит совпадение (*keyword*). Enter подтверждает; Esc отменяет. |
| filter.input | Type keyword | Введите ключевое слово |
| filter.loading | Finding suggestions… | Поиск подсказок… |
| filter.noCandidates | No suggestions. You can still apply this keyword. | Подсказок нет. Вы всё равно можете применить это ключевое слово. |
| filter.placeholder | Type a fragment, e.g. delta | Введите фрагмент, например delta |
| filter.title | Filter types | Типы фильтра |
| object.absent | [Empty slot] | [Пустой слот] |
| object.accessor | [Getter / Setter, not evaluated] | [Геттер / сеттер, не вычисляется] |
| object.empty | Empty | Пусто |
| object.group | Group | Группа |
| object.groupData | Group Data | Данные группы |
| object.more | Show more | Показать больше |
| object.navigation | Raw data navigation | Навигация по необработанным данным |
| object.node | Node | Узел |
| object.nodeData | Node Data | Данные узла |
| object.properties | Other properties | Другие свойства |
| object.step | Step | Шаг |
| object.stepData | Step Data | Данные шага |
| object.turn | Turn | Ход |
| object.turnData | Turn Data | Данные хода |
| picker.cancel | Cancel picking (Esc) | Отменить выбор (Esc) |
| picker.instructions | Hover in the main Chat to preview, then click to select. Esc cancels. | Наведите курсор в основном чате для предпросмотра, затем щёлкните для выбора. Esc отменяет. |
| picker.noChat | Open this Session in the main Chat before picking. | Откройте эту сессию в основном чате, чтобы выбрать. |
| picker.noMatch | No matching record in this table. Pick another element or press Esc to cancel. | В этой таблице нет подходящей записи. Выберите другой элемент или нажмите Esc для отмены. |
| picker.pick | Pick an element in Chat View | Выбрать элемент в представлении чата |
| tab.description | Analyze raw logs and grouped chat messages for the current session in the sidebar. | Анализируйте необработанные журналы и сгруппированные сообщения чата текущей сессии на боковой панели. |
| tab.title | Session Log | Журнал сессии |
| table.close | Close | Закрыть |
| table.collapse | Collapse children | Свернуть дочерние |
| table.data | Data | Данные |
| table.empty | No records | Нет записей |
| table.expand | Expand children | Развернуть дочерние |
| table.id | Index | Индекс |
| table.latest | Follow Latest | Следовать за последними |
| table.loading | Loading… | Загрузка… |
| table.location | T/S | Х/Ш |
| table.older | Load earlier | Загрузить более ранние |
| table.raw | Raw data | Необработанные данные |
| table.rawError | This record could not be serialized. Select another record to continue. | Эту запись не удалось сериализовать. Выберите другую запись, чтобы продолжить. |
| table.removed | This record was removed or settled. Select a current record. | Эта запись была удалена или завершена. Выберите текущую запись. |
| table.resizeDetails | Resize raw data panel | Изменить размер панели необработанных данных |
| table.time | Time (UTC) | Время (UTC) |
| table.type | Type | Тип |
| view.chatNode | Chat Group | Группа чата |
| view.presentation | Presentation | Представление |
| view.sessionLog | Raw Log | Необработанный журнал |

## session-log-download

| Ключ | English (original) | Русский |
|---|---|---|
| dialog.close | Close | Закрыть |
| dialog.commandFailed | Could not start the Session export. | Не удалось запустить экспорт сессии. |
| dialog.errorTitle | Session export failed | Не удалось экспортировать сессию |
| dialog.preparingDescription | Preparing a ZIP containing this Session, its sub-Sessions, and attachments. | Подготовка ZIP-архива с этой сессией, её подсессиями и вложениями. |
| dialog.preparingTitle | Exporting Session | Экспорт сессии |
| dialog.successDescription | The browser is downloading the Session ZIP. | Браузер скачивает ZIP-архив сессии. |
| dialog.successTitle | Session download started | Загрузка сессии начата |
| header.more | More actions | Другие действия |
| menu.download | Download session log | Скачать журнал сессии |
| menu.feedback | Feedback | Обратная связь |

## settings

| Ключ | English (original) | Русский |
|---|---|---|
| close | Close | Закрыть |
| connection.connected | Connected | Подключено |
| connection.connecting | Reconnecting | Переподключение |
| connection.error | Disconnected | Отключено |
| connection.reconnect | Disconnected, reconnect now | Отключено, подключиться сейчас |
| connection.restart | Reconnecting, reconnect now | Переподключение, подключиться сейчас |
| desktop.update.available | Update | Обновить |
| desktop.update.checkFailed | Could not check for updates. Please try again later. | Не удалось проверить обновления. Повторите попытку позже. |
| desktop.update.checkNetworkFailed | Could not check for updates. Check your connection and try again. | Не удалось проверить обновления. Проверьте подключение и повторите попытку. |
| desktop.update.checking | Checking for updates… | Проверка обновлений… |
| desktop.update.downloadDetail | Downloading update: {percent}%<br>Target version: {version} | Загрузка обновления: {percent}%<br>Целевая версия: {version} |
| desktop.update.downloadFailed | Could not download the update. Please try again. | Не удалось скачать обновление. Повторите попытку. |
| desktop.update.downloadNetworkFailed | Could not download the update. Check your connection and try again. | Не удалось скачать обновление. Проверьте подключение и повторите попытку. |
| desktop.update.installFailed | Could not install the update. Please try again later. | Не удалось установить обновление. Повторите попытку позже. |
| desktop.update.installNetworkFailed | Could not install the update. Check your connection and try again. | Не удалось установить обновление. Проверьте подключение и повторите попытку. |
| desktop.update.installing | Preparing to restart… | Подготовка к перезапуску… |
| desktop.update.progress | {percent}% | {percent}% |
| desktop.update.ready | Install and Restart | Установить и перезапустить |
| desktop.update.retry | Retry update | Повторить обновление |
| desktop.update.stopFailed | Could not safely stop the tasks. The update has not been installed. Please try again later. | Не удалось безопасно остановить задачи. Обновление не установлено. Повторите попытку позже. |
| desktop.update.tasksChanged | New tasks have started. Confirm again to stop the tasks and update. | Запустились новые задачи. Подтвердите ещё раз, чтобы остановить задачи и обновить. |
| desktop.update.tasksUnavailable | Task status is unavailable. Try updating again when the workspace is ready. | Статус задач недоступен. Повторите обновление, когда рабочая область будет готова. |
| desktop.update.verifying | Verifying update files… | Проверка файлов обновления… |
| desktop.update.versionDetail | {label}: {version} | {label}: {version} |
| developerTools.description | Shows trajectory, code diffs, and all Agent presets | Показывает траекторию, различия кода и все пресеты агента |
| developerTools.error | Could not save. Please try again. | Не удалось сохранить. Повторите попытку. |
| developerTools.title | Show coding view | Показывать режим разработки |
| general.currentVersion | Current version: {version} | Текущая версия: {version} |
| general.nav | General | Общие |
| hostRelease.description | The service version changed. This page paused live updates; reload to load the new version. | Версия сервиса изменилась. Эта страница приостановила обновление в реальном времени; перезагрузите её, чтобы загрузить новую версию. |
| hostRelease.later | Not now | Не сейчас |
| hostRelease.page | Page | Страница |
| hostRelease.reload | Reload to load the new version | Перезагрузить и загрузить новую версию |
| hostRelease.service | Service | Сервис |
| hostRelease.title | Service version changed | Версия сервиса изменилась |
| hostRelease.unknown | Unknown | Неизвестно |
| openDocument | Open configuration file | Открыть файл конфигурации |
| openDocument.error | Could not open configuration file | Не удалось открыть файл конфигурации |
| shortcut.open | Open settings | Открыть настройки |
| title | Settings | Настройки |
| trigger | Settings | Настройки |

## settings.account

| Ключ | English (original) | Русский |
|---|---|---|
| accountInfo | More account information | Подробнее об аккаунте |
| addApiKey | Add API Key | Добавить API-ключ |
| backToHarness | Back to DeepSeek Harness | Назад в DeepSeek Harness |
| balance | Topped-up balance | Пополненный баланс |
| balanceSignedOut | Sign in to view | Войдите, чтобы увидеть |
| balanceUnavailable | View on Platform | Посмотреть на платформе |
| bonusBalance | Granted balance | Начисленный баланс |
| bonusNoticeTitle | Bonus credited | Бонус начислен |
| browserDescription | , then open it in your browser to finish signing in. | , затем откройте её в браузере, чтобы завершить вход. |
| browserPrompt | Page did not open automatically?  | Страница не открылась автоматически?  |
| browserTitle | Waiting for sign in | Ожидание входа |
| cancel | Cancel | Отмена |
| close | Close | Закрыть |
| completing | Completing sign in… | Завершение входа… |
| contactUs | Feedback | Обратная связь |
| copiedLink | Link copied | Ссылка скопирована |
| copyFailed | Copy failed | Не удалось скопировать |
| copyLink | Copy sign-in link | Скопировать ссылку для входа |
| expired | Sign in expired. Try again. | Вход истёк. Повторите попытку. |
| failed | Could not complete the operation. Try again. | Не удалось выполнить операцию. Повторите попытку. |
| failureTitle | Could not sign in | Не удалось войти |
| initializing | Starting sign in… | Начало входа… |
| loading | Loading… | Загрузка… |
| loginDescription | Sign in to your DeepSeek account or add an API Key to get started. Your projects and files are stored locally. | Войдите в аккаунт DeepSeek или добавьте API-ключ, чтобы начать. Ваши проекты и файлы хранятся локально. |
| loginTitle | Get started | Начните работу |
| menu | Account menu | Меню аккаунта |
| modelSignInRequired | Model unavailable. Please sign in and try again. | Модель недоступна. Войдите и повторите попытку. |
| more | More | Ещё |
| nav | Account | Аккаунт |
| noResponse | Something went wrong. Please check your network connection and try again. | Что-то пошло не так. Проверьте подключение к сети и повторите попытку. |
| onboardingArtworkLocale | en | en |
| onboardingBack | Back | Назад |
| onboardingBrand | DeepSeek Harness | DeepSeek Harness |
| onboardingCompact | Results only | Только результаты |
| onboardingCompactDescription | See just the results in a clean, simple interface | Показывать только результаты в чистом и простом интерфейсе |
| onboardingContinue | Continue | Продолжить |
| onboardingCredit | Add credits | Добавить кредиты |
| onboardingCreditDescription | DeepSeek Harness charges credits based on the tokens used by models and tools. Add credits in advance to keep your tasks running without interruption. Your balance is only used while the agent is working on a task. | DeepSeek Harness списывает кредиты исходя из токенов, использованных моделями и инструментами. Пополните кредиты заранее, чтобы задачи выполнялись без перерывов. Баланс расходуется только пока агент работает над задачей. |
| onboardingDetailed | Full details | Все подробности |
| onboardingDetailedDescription | See the full process for easier debugging and troubleshooting | Показывать весь процесс для упрощения отладки и поиска неполадок |
| onboardingDevelopment | Coding & development | Кодинг и разработка |
| onboardingDevelopmentDescription | Edit code, debug issues, run commands, manage project files, and more | Редактируйте код, отлаживайте ошибки, выполняйте команды, управляйте файлами проекта и другое |
| onboardingEnter | Open app | Открыть приложение |
| onboardingFundedTopUp | Add credits | Добавить кредиты |
| onboardingGoTopUp | Add credits | Добавить кредиты |
| onboardingIntroduction | DeepSeek Harness works in a local folder and uses tools to read and write files on your computer. It can help you research and organize information, create documents and spreadsheets, write code, troubleshoot issues, and more. | DeepSeek Harness работает в локальной папке и использует инструменты для чтения и записи файлов на вашем компьютере. Он помогает искать и упорядочивать информацию, создавать документы и таблицы, писать код, устранять неполадки и другое. |
| onboardingKeepSetting | Continue setup | Продолжить настройку |
| onboardingLater | Next | Далее |
| onboardingLoading | Loading settings… | Загрузка настроек… |
| onboardingNoCreditDescription | DeepSeek Harness can’t start new tasks without credits. You can add them later in Settings → Account. | DeepSeek Harness не может начать новые задачи без кредитов. Вы можете добавить их позже в разделе «Настройки» → «Аккаунт». |
| onboardingNoCreditTitle | Skip adding credits? | Пропустить добавление кредитов? |
| onboardingOffice | Office & creative work | Офисные и творческие задачи |
| onboardingOfficeDescription | Edit documents, organize data, create presentations, and more | Редактируйте документы, упорядочивайте данные, создавайте презентации и другое |
| onboardingProcess | How much detail would you like to see? | Сколько подробностей вы хотите видеть? |
| onboardingProcessDescription | This only changes how progress is shown, not what DeepSeek Harness can do. | Это меняет только отображение хода работы, а не возможности DeepSeek Harness. |
| onboardingPurposeDescription | We’ll tailor the interface and tools to fit the way you work. | Мы адаптируем интерфейс и инструменты под то, как вы работаете. |
| onboardingPurposePrefix | What would you like | Что вам нужно |
| onboardingPurposeSuffix | to help with? | сделать? |
| onboardingRetry | Retry | Повторить |
| onboardingSaveFailed | Could not save settings. Try again. | Не удалось сохранить настройки. Повторите попытку. |
| onboardingSkip | Skip | Пропустить |
| onboardingSkipDescription | You can change how progress, performance, and usage are displayed, or enable Coding Tools, anytime in Settings → General. | Вы можете в любой момент изменить отображение прогресса, производительности и использования или включить инструменты кодинга в разделе «Настройки» → «Общие». |
| onboardingSkipTitle | Skip setup? | Пропустить настройку? |
| onboardingStandard | Key details | Ключевые детали |
| onboardingStandardDescription | Focus on results, with only the most important steps and actions shown | Акцент на результатах, показываются только самые важные шаги и действия |
| onboardingStart | Get started | Начать |
| onboardingTopUp | Add credits | Добавить кредиты |
| onboardingUnderstood | Got it | Понятно |
| onboardingWelcome | Welcome to | Добро пожаловать в |
| open | Open browser | Открыть в браузере |
| platformFailed | Could not complete the operation. Try again. | Не удалось выполнить операцию. Повторите попытку. |
| platformRetry | Retry | Повторить |
| profileUnavailable | Account details are not available yet. | Данные аккаунта пока недоступны. |
| quotaDescription | DeepSeek Harness cannot start a new task with this account when no balance is available. Would you like to top up? You can also top up later in Settings → Account. | DeepSeek Harness не может запустить новую задачу с этим аккаунтом при отсутствии баланса. Хотите пополнить? Это также можно сделать позже в разделе «Настройки» → «Аккаунт». |
| quotaTitle | No balance available | Нет доступного баланса |
| quotaTopUp | Top up | Пополнить |
| retry | Sign in again | Войти снова |
| sessionExpired | You have signed out of your account, please log in again. | Вы вышли из аккаунта, пожалуйста, войдите снова. |
| settings | Settings | Настройки |
| settingsSignedOutDescription | Sign in to DeepSeek Harness to get your dedicated API Key | Войдите в DeepSeek Harness, чтобы получить свой API-ключ |
| settingsSignedOutTitle | You are not signed in to DeepSeek Harness | Вы не вошли в DeepSeek Harness |
| signIn | Sign in | Войти |
| signInDescription | Use your DeepSeek account to get started. | Используйте аккаунт DeepSeek, чтобы начать. |
| signOut | Sign out | Выйти |
| signOutDescription | Signing out will not delete any data. You can sign in to this account again. | Выход не удалит данные. Вы сможете снова войти в этот аккаунт. |
| signOutRunningDescription | Tasks are currently running. Signing out will interrupt them. Sign out now? | Сейчас выполняются задачи. Выход прервёт их. Выйти сейчас? |
| signOutUnknownDescription | Could not check running tasks. Signing out may interrupt tasks using this account. Sign out now? | Не удалось проверить выполняющиеся задачи. Выход может прервать задачи, использующие этот аккаунт. Выйти сейчас? |
| signedIn | Signed in to DeepSeek | Вход выполнен в DeepSeek |
| signedOut | Not signed in | Вход не выполнен |
| timeoutDescription | Sign in again to continue. | Войдите снова, чтобы продолжить. |
| timeoutTitle | Sign in timed out | Время входа истекло |
| topUp | Top up | Пополнить |
| usage | View usage | Посмотреть использование |
| waiting | Continue in your browser | Продолжите в браузере |

## settings.agentLoop

| Ключ | English (original) | Русский |
|---|---|---|
| description | Control how the Agent dispatches tool calls. | Управляйте тем, как агент отправляет вызовы инструментов. |
| invalidNumber | Enter a number, or leave blank to use the default. | Введите число или оставьте поле пустым, чтобы использовать значение по умолчанию. |
| maxParallel | Parallel tool calls | Параллельные вызовы инструментов |
| maxParallelHint | Upper bound on parallel-safe calls running at once within one step. | Верхняя граница одновременно выполняемых безопасных параллельных вызовов в рамках одного шага. |
| overridden | Overridden | Переопределено |
| readOnly | This deployment stores settings read-only. | В этом развёртывании настройки хранятся только для чтения. |
| reset | Reset to default | Сбросить к значениям по умолчанию |
| save | Save | Сохранить |
| saveFailed | The deployment did not accept these values; they were left for you to correct. | Развёртывание не приняло эти значения; они оставлены для исправления. |
| saving | Saving… | Сохранение… |
| title | Agent loop | Цикл агента |
| unavailable | This plugin is not loaded, so it cannot be configured right now. | Плагин не загружен, поэтому сейчас его нельзя настроить. |

## settings.agentPreset

| Ключ | English (original) | Русский |
|---|---|---|
| brokenBadge | Failed to load | Не удалось загрузить |
| builtInGroup | Built-in | Встроенные |
| close | Close | Закрыть |
| createPlugin | Let the agent create a plugin | Позволить агенту создать плагин |
| createPluginChecking | Checking whether Creator mode is available | Проверка доступности режима «Создатель» |
| createPluginDescription | Enter Creator mode and make your own DSH plugin | Перейдите в режим «Создатель» и сделайте собственный плагин DSH |
| createPluginMissing | Creator mode is not included in this configuration | Режим «Создатель» не входит в эту конфигурацию |
| createPluginUnavailable | Temporarily unavailable. Reopen this menu to retry | Временно недоступно. Откройте меню снова, чтобы повторить |
| creatorDraft | Let the agent help me create a preset | Позволить агенту помочь создать пресет |
| customGroup | Custom | Пользовательские |
| guideCopied | Copied | Скопировано |
| guideCopy | Copy | Копировать |
| guideCordisExplanation | ### What you can create<br><br>Creator mode includes the standard task tools plus runtime inspection, persistent plugin management, and guidance for authoring Cordis plugins and agent presets. It can create a plugin that adds a capability or UI, or a preset that combines tools and prompts for a particular job.<br><br>### Plugins and modes<br><br>A plugin adds capabilities to DSH, such as a tool, a service connection, or a UI entry. A mode is an agent preset that selects tools and defines how the agent works in a task. A plugin can be included in a custom preset.<br><br>### How the result takes effect<br><br>Ask the agent to install and verify the result, not just generate source code. A plugin may load immediately or require a restart, depending on what it changes. A newly created preset is selected when starting a new task. | ### Что можно создать<br><br>Режим «Создатель» включает стандартные инструменты для задач, а также инспекцию среды выполнения, постоянное управление плагинами и руководство по созданию плагинов Cordis и пресетов агентов. Он может создать плагин, добавляющий возможность или UI, либо пресет, объединяющий инструменты и промпты для конкретной задачи.<br><br>### Плагины и режимы<br><br>Плагин добавляет DSH возможности: инструмент, подключение к сервису или элемент UI. Режим — это пресет агента, который выбирает инструменты и определяет, как агент работает над задачей. Плагин можно включить в пользовательский пресет.<br><br>### Как результат вступает в силу<br><br>Попросите агента установить и проверить результат, а не только сгенерировать исходный код. Плагин может загрузиться сразу или потребовать перезапуска — в зависимости от того, что он меняет. Новый пресет выбирается при запуске новой задачи. |
| guideCordisIntro | Choose Creator mode for a new task. Describe the capability you want, where it should appear, and how you will verify it. | Выберите режим «Создатель» для новой задачи. Опишите нужную возможность, где она должна отображаться и как вы будете её проверять. |
| guideCordisUsage | ### Add a UI<br><br>> Create a DSH plugin that adds a project notes entry to the sidebar. Let me browse the Markdown files in this workspace and preview a selected note. Install it and verify that the page opens.<br><br>Expected output: an installed plugin with a working entry and preview page, plus any remaining activation steps.<br><br>### Add a tool<br><br>> Create a plugin with a tool that reads this project’s test report and summarizes the failed tests. Register it and verify it with a sample report.<br><br>Expected output: a plugin with a callable tool and a verified sample call.<br><br>### Create my own mode<br><br>> Create a “Code review” mode based on Standard mode. Have it prioritize potential bugs and test gaps, cite file paths and lines, and ask before modifying files. Save it as a selectable preset.<br><br>Expected output: a custom preset for new tasks. These review instructions guide the agent; permission settings determine which actions it can execute. | ### Добавить UI<br><br>> Создай плагин DSH, который добавляет в боковую панель пункт «Заметки проекта». Дай мне просматривать файлы Markdown в этой рабочей области и открывать предпросмотр выбранной заметки. Установи его и проверь, что страница открывается.<br><br>Ожидаемый результат: установленный плагин с работающим пунктом и страницей предпросмотра, а также оставшиеся шаги активации.<br><br>### Добавить инструмент<br><br>> Создай плагин с инструментом, который читает отчёт о тестах этого проекта и суммирует упавшие тесты. Зарегистрируй его и проверь на примере отчёта.<br><br>Ожидаемый результат: плагин с вызываемым инструментом и проверенным примером вызова.<br><br>### Создать собственный режим<br><br>> Создай режим «Код-ревью» на основе стандартного режима. Пусть он в первую очередь обращает внимание на потенциальные ошибки и пробелы в тестах, указывает пути к файлам и номера строк и спрашивает перед изменением файлов. Сохрани его как выбираемый пресет.<br><br>Ожидаемый результат: пользовательский пресет для новых задач. Эти инструкции по ревью направляют агента; настройки разрешений определяют, какие действия он может выполнять. |
| guideExampleTask | Example task | Пример задачи |
| guideFootnotes | Footnotes | Сноски |
| guideMinimalExplanation | ### What is included<br><br>One persistent shell tool, read_image, and a fixed system prompt. Image reading requires an image-capable model. Older history is compacted automatically under context pressure; use /compact while the agent is idle to compact it manually. The built-in preset does not load Skills, planning, or the standard runtime context.<br><br>### When to choose it<br><br>Use it as a baseline for experiments and comparisons. It can still read files and execute scripts through shell commands, but offers fewer built-in ways to manage a long task. Fewer tools does not necessarily make it easier for a beginner. | ### Что входит<br><br>Один постоянный инструмент оболочки, read_image и фиксированный системный промпт. Для чтения изображений нужна модель с поддержкой изображений. Старая история автоматически сжимается при нехватке контекста; используйте /compact, пока агент простаивает, чтобы сжать её вручную. Встроенный пресет не загружает навыки, планирование и стандартный контекст среды выполнения.<br><br>### Когда выбирать<br><br>Используйте его как базу для экспериментов и сравнений. Он всё ещё может читать файлы и выполнять скрипты через команды оболочки, но предлагает меньше встроенных способов вести долгую задачу. Меньшее число инструментов не обязательно упрощает работу для новичка. |
| guideMinimalIntro | Choose Minimal mode for a new task. For a comparison, hold the model, permissions, input, and starting workspace state constant across runs. | Выберите минимальный режим для новой задачи. Для сравнения сохраняйте модель, разрешения, входные данные и исходное состояние рабочей области неизменными между запусками. |
| guideMinimalUsage | ### Compare performance on a small bug fix<br><br>> Run the tests for this project, find the cause of the failure, and make the smallest fix. Run the relevant tests again and report the result.<br><br>Run the same task separately in Standard and Minimal modes from the same starting state. Compare task completion, tool calls, and the resulting changes. Minimal mode performs the work through terminal commands. | ### Сравнить работу на небольшом исправлении<br><br>> Запусти тесты этого проекта, найди причину падения и сделай минимальное исправление. Снова запусти нужные тесты и сообщи результат.<br><br>Запустите одну и ту же задачу отдельно в стандартном и минимальном режимах из одного исходного состояния. Сравните завершение задачи, вызовы инструментов и полученные изменения. Минимальный режим выполняет работу через команды терминала. |
| guidePtcExplanation | ### How tools are called<br><br>PTC means Programmatic Tool Calling. In this built-in preset, the agent uses run_code to write a TypeScript program that calls tools through a generated SDK. The program can use loops, conditions, error handling, and concurrent calls where appropriate.<br><br>### What reaches the model<br><br>Tool results first reach the program, which can filter and combine them. The model receives what the program prints or returns; image results are attached separately. Nested tool calls are still recorded and remain subject to tool permissions.<br><br>### Compared with Standard mode<br><br>Both modes can handle coding and batch tasks. Standard mode exposes individual tools directly; PTC organizes tool calls in code. The current PTC preset leaves the workflow tool disabled. Speed and token use depend on the task and how the program handles its results. | ### Как вызываются инструменты<br><br>PTC означает программируемый вызов инструментов (Programmatic Tool Calling). В этом встроенном пресете агент использует run_code, чтобы написать программу на TypeScript, которая вызывает инструменты через сгенерированный SDK. Программа может применять циклы, условия, обработку ошибок и параллельные вызовы, где это уместно.<br><br>### Что попадает в модель<br><br>Результаты инструментов сначала попадают в программу, которая может их фильтровать и объединять. Модель получает то, что программа выводит или возвращает; результаты с изображениями прикрепляются отдельно. Вложенные вызовы инструментов всё равно записываются и подчиняются разрешениям инструментов.<br><br>### По сравнению со стандартным режимом<br><br>Оба режима справляются с задачами по кодингу и пакетной обработке. Стандартный режим предоставляет отдельные инструменты напрямую; PTC организует вызовы инструментов в коде. В текущем пресете PTC инструмент workflow отключён. Скорость и расход токенов зависят от задачи и от того, как программа обрабатывает свои результаты. |
| guidePtcIntro | Choose PTC mode when starting a new task. Specify the input files, processing rules, and output format. The agent writes the code. | Выбирайте режим PTC при запуске новой задачи. Укажите входные файлы, правила обработки и формат вывода. Код пишет агент. |
| guidePtcUsage | ### Check a set of configuration files<br><br>> Check all JSON files in configs/. List missing required fields and invalid values against schema.json. Save a CSV with one row per issue. Include unreadable files in the report and keep checking the rest. Leave the original files unchanged.<br><br>Expected output: an issue summary and a CSV report. The program can repeat the same checks, handle individual failures, and collect the results.<br><br>### Summarize error logs<br><br>> Analyze the log files in logs/. Group errors by service and error type. Show the ten most frequent groups and one example from each. Save the full counts to a CSV.<br><br>Expected output: the top error groups and a complete count table. Intermediate data can be aggregated in the program before the summary reaches the model. | ### Проверить набор файлов конфигурации<br><br>> Проверь все файлы JSON в configs/. Перечисли отсутствующие обязательные поля и недопустимые значения по schema.json. Сохрани CSV, где каждая проблема — отдельная строка. Включи в отчёт нечитаемые файлы и продолжай проверять остальные. Исходные файлы не меняй.<br><br>Ожидаемый результат: сводка проблем и отчёт в CSV. Программа может повторять одни и те же проверки, обрабатывать отдельные сбои и собирать результаты.<br><br>### Суммировать логи ошибок<br><br>> Проанализируй файлы журналов в logs/. Сгруппируй ошибки по сервису и типу ошибки. Покажи десять самых частых групп и по одному примеру из каждой. Сохрани полные счётчики в CSV.<br><br>Ожидаемый результат: основные группы ошибок и полная таблица счётчиков. Промежуточные данные можно агрегировать в программе, прежде чем сводка попадёт в модель. |
| guideSections | Guide sections | Разделы руководства |
| guideStandardExplanation | ### How it works<br><br>The agent calls tools directly to read and edit files, search, and run terminal commands. It includes Skills, planning, goals, subagents, workflows, and context compaction.<br><br>### When to choose it<br><br>Start here for everyday coding, file work, and research. Standard mode can also write scripts and process files in batches. PTC changes how tool calls are organized; it is not required for batch tasks. | ### Как это работает<br><br>Агент напрямую вызывает инструменты, чтобы читать и редактировать файлы, искать и выполнять команды терминала. Он включает навыки, планирование, цели, субагентов, рабочие процессы и сжатие контекста.<br><br>### Когда выбирать<br><br>Начните отсюда для повседневного кодинга, работы с файлами и исследований. Стандартный режим также умеет писать скрипты и обрабатывать файлы пакетами. PTC меняет способ организации вызовов инструментов; для пакетных задач он не обязателен. |
| guideStandardIntro | Choose Standard mode when starting a new task. Describe what you want to accomplish, point to the relevant files, and explain how to check the result. | Выбирайте стандартный режим при запуске новой задачи. Опишите, чего вы хотите достичь, укажите нужные файлы и объясните, как проверить результат. |
| guideStandardUsage | ### Fix a bug<br><br>> Find out why submitting the search form twice makes the results disappear. Fix it and run the relevant tests. Explain the cause and what changed.<br><br>Expected output: a code change, the relevant test results, and an explanation of the cause.<br><br>### Organize project notes<br><br>> Read the Markdown notes in this project. Summarize the agreed decisions and open questions, with links to the source files.<br><br>Expected output: a summary with references that you can check against the original notes. | ### Исправить ошибку<br><br>> Выясни, почему при повторной отправке формы поиска результаты исчезают. Исправь это и запусти нужные тесты. Объясни причину и что изменилось.<br><br>Ожидаемый результат: изменение кода, результаты нужных тестов и объяснение причины.<br><br>### Упорядочить заметки проекта<br><br>> Прочитай заметки Markdown в этом проекте. Суммируй принятые решения и открытые вопросы со ссылками на исходные файлы.<br><br>Ожидаемый результат: сводка со ссылками, которую можно сверить с исходными заметками. |
| headerHint | The agent preset chosen when this task started | Пресет агента, выбранный при запуске этой задачи |
| howToUse | How to use | Как использовать |
| inUse | New task default | По умолчанию для новых задач |
| modeExplanation | Mode details | О режиме |
| nav | Agent presets | Пресеты агентов |
| noDescription | No description. | Без описания. |
| presetCordisDescription | Customize DSH through conversation. Let the agent write plugins that add features or UI, or combine tools and prompts to create your own mode. | Настраивайте DSH через диалог. Позвольте агенту писать плагины, добавляющие функции или UI, или комбинировать инструменты и промпты, чтобы создать собственный режим. |
| presetCordisName | Creator mode | Режим «Создатель» |
| presetMinimalDescription | The agent uses a terminal and image reading, with context compaction. Useful for testing and comparing its basic performance. | Агент использует терминал и чтение изображений, а также сжатие контекста. Полезен для проверки и сравнения базовой производительности. |
| presetMinimalName | Minimal mode | Минимальный режим |
| presetPtcDescription | Includes all Standard mode capabilities. Better suited to tasks that call tools in batches and then filter, organize, deduplicate, count, or summarize the results. | Включает все возможности стандартного режима. Лучше подходит для задач, где инструменты вызываются пакетами, а затем результаты фильтруются, упорядочиваются, дедуплицируются, подсчитываются или суммируются. |
| presetPtcName | PTC mode | Режим PTC |
| presetStandardDescription | Work with code, files, and information. Suitable for most tasks, with search, editing, terminal commands, and other tools available as needed. | Работа с кодом, файлами и информацией. Подходит для большинства задач: поиск, редактирование, команды терминала и другие инструменты доступны по мере необходимости. |
| presetStandardName | Standard mode | Стандартный режим |
| seatHint | Choose the agent preset for your new task | Выберите пресет агента для новой задачи |
| sectionIntro | Choose the agent’s tools and how it works. Use Standard mode for everyday tasks, or Creator mode to add capabilities to DSH. | Выберите инструменты агента и то, как он работает. Используйте стандартный режим для повседневных задач или режим «Создатель», чтобы добавлять возможности в DSH. |
| setDefault | Set as new task default | Сделать по умолчанию для новых задач |
| standardUnavailable | Standard mode is unavailable. Restore it or choose another available mode. | Стандартный режим недоступен. Восстановите его или выберите другой доступный режим. |
| switchRefused | Could not switch to {name}: {reason} | Не удалось переключиться на {name}: {reason} |
| view | View configuration | Посмотреть конфигурацию |

## settings.locale

| Ключ | English (original) | Русский |
|---|---|---|
| language.title | Language | Язык |

## settings.models

| Ключ | English (original) | Русский |
|---|---|---|
| accountSignedIn | Signed in | Выполнен вход |
| add | Add model provider | Добавить провайдера моделей |
| addCatalog | Third-party model provider | Сторонний провайдер моделей |
| addCatalogExhausted | Every catalog provider is already configured. | Все провайдеры из каталога уже настроены. |
| addCatalogHint | Pick OpenAI, Anthropic, Kimi, or another provider from the built-in catalog and enter its API key. | Выберите OpenAI, Anthropic, Kimi или другого провайдера из встроенного каталога и введите его API-ключ. |
| addCustom | Custom model API | Свой API моделей |
| addCustomHint | Connect a relay, a self-hosted server, or any other OpenAI- or Anthropic-compatible endpoint by its base URL, protocol, and models. | Подключите релей, собственный сервер или любую другую конечную точку, совместимую с OpenAI или Anthropic, указав базовый URL, протокол и модели. |
| addCustomUnavailable | No API protocol is available to declare. | Нет доступного протокола API, который можно указать. |
| addMode | How to add | Способ добавления |
| addModel | Add model | Добавить модель |
| advancedHint | Other fields live in cordis.patch.yml; edit that section directly. | Остальные поля находятся в cordis.patch.yml; редактируйте этот раздел напрямую. |
| apply | Apply | Применить |
| applying | Applying… | Применение… |
| authHelp | Authentication details | Параметры аутентификации |
| baseUrl | Base URL | Базовый URL |
| baseUrlConfigured | Provider-configured endpoint | Конечная точка из настроек провайдера |
| baseUrlDefault | No default endpoint | Нет конечной точки по умолчанию |
| baseUrlEnvironment | Provider endpoint configuration: {env} | Настройка конечной точки провайдера: {env} |
| baseUrlPlaceholder | {url} | {url} |
| cancel | Cancel | Отмена |
| close | Close | Закрыть |
| conflict | Someone else changed these settings while this card was open. Close it and reopen to edit the current values. | Кто-то изменил эти настройки, пока карточка была открыта. Закройте её и откройте снова, чтобы редактировать текущие значения. |
| contextWindow | Context window | Контекстное окно |
| contextWindowPlaceholder | Uses the provider default | Используется значение провайдера по умолчанию |
| create | Create provider | Создать провайдера |
| creating | Creating… | Создание… |
| credentialConfigured | API key configured | API-ключ настроен |
| credentialMissing | API key missing | API-ключ отсутствует |
| customAnthropicBaseUrlPlaceholder | https://gateway.example | https://gateway.example |
| customApi | API protocol | Протокол API |
| customApiUnset | Not selected | Не выбран |
| customBaseUrlInvalid | Enter a valid HTTP or HTTPS URL. | Введите корректный URL HTTP или HTTPS. |
| customBaseUrlPlaceholder | https://gateway.example/v1 | https://gateway.example/v1 |
| customDisplayName | Display name | Отображаемое имя |
| customNeedsBaseUrl | A custom provider needs a base URL. | Своему провайдеру нужен базовый URL. |
| customNeedsModels | A custom provider needs at least one model. | Своему провайдеру нужна хотя бы одна модель. |
| customRoute | Provider ID | ID провайдера |
| customRouteHint | Lowercase identifier, starting with a letter, that uniquely names this provider in requests and as its credential name. | Идентификатор в нижнем регистре, начинающийся с буквы, который однозначно называет этого провайдера в запросах и в имени его учётных данных. |
| customRouteInvalid | Start with a lowercase letter; then lowercase letters, digits, and dashes. | Начните со строчной буквы; далее строчные буквы, цифры и дефисы. |
| customRouteTaken | A provider already uses this ID. | Провайдер с таким ID уже есть. |
| customTag | Custom | Свой |
| customized | Customized settings | Изменённые настройки |
| deepSeekAccount | DeepSeek Account | Аккаунт DeepSeek |
| deepSeekBaseUrl | https://api.deepseek.com/anthropic (Default to use DEEPSEEK_BASE_URL) | https://api.deepseek.com/anthropic (по умолчанию используется DEEPSEEK_BASE_URL) |
| deepSeekEndpointHint | Use an API endpoint compatible with Anthropic Messages. | Используйте конечную точку API, совместимую с Anthropic Messages. |
| deleteConfirm | Delete {provider} | Удалить {provider} |
| deleteDescription | Deleting {provider} removes its configuration. Any credential it uses is managed elsewhere and will be kept. | Удаление {provider} удалит его конфигурацию. Используемые им учётные данные управляются в другом месте и будут сохранены. |
| deleteDescriptionWithCredential | Deleting {provider} removes its configuration and stored API key. | Удаление {provider} удалит его конфигурацию и сохранённый API-ключ. |
| deleteTitle | Delete {provider}? | Удалить {provider}? |
| deleting | Deleting {provider}… | Удаление {provider}… |
| edit | Edit | Изменить |
| editProvider | Edit {provider} | Изменить {provider} |
| fetchAdopt | Add selected | Добавить выбранные |
| fetchDescription | These are the models this provider has available. Choose the ones to add. | Это модели, доступные у провайдера. Выберите те, что нужно добавить. |
| fetchDeselectAll | Deselect all | Снять выбор |
| fetchEmpty | The provider listed no models. Add them by hand. | Провайдер не вернул ни одной модели. Добавьте их вручную. |
| fetchModels | Fetch available models | Загрузить доступные модели |
| fetchNeedsBaseUrl | Enter the base URL first, then fetch. | Сначала введите базовый URL, затем загрузите. |
| fetchNoMatches | No matching models. | Подходящих моделей нет. |
| fetchSearch | Search models | Поиск моделей |
| fetchSelectAll | Select all | Выбрать все |
| fetchTitle | Choose models to add | Выберите модели для добавления |
| fetching | Asking the provider… | Запрос к провайдеру… |
| intro | Enter your API keys to use models from the following providers. | Введите свои API-ключи, чтобы использовать модели следующих провайдеров. |
| keyBlank | Enter the API key, or leave the field empty to keep the stored one. | Введите API-ключ или оставьте поле пустым, чтобы сохранить текущий. |
| keyBlankNew | Enter the API key, or leave the field empty if this provider authenticates another way. | Введите API-ключ или оставьте поле пустым, если этот провайдер аутентифицируется иначе. |
| keyFallbackDetected | Env var detected. ({hint}) | Обнаружена переменная окружения. ({hint}) |
| keyFallbackDetectedHidden | Env var detected. | Обнаружена переменная окружения. |
| keyFallbackMissing | Env var not detected. Enter an API key, or configure {hint} in your env. | Переменная окружения не обнаружена. Введите API-ключ или настройте {hint} в окружении. |
| keyFallbackUnchecked | Environment credential status has not been confirmed. | Статус учётных данных окружения не подтверждён. |
| keyHelp | Saved credentials are used first. Environment fallbacks shown here, in order: {env}. Sources are launch environment, $cwd/.env, then $DSH_HOME/.env. | Сначала используются сохранённые учётные данные. Резервные варианты из окружения указаны здесь по порядку: {env}. Источники: окружение запуска, $cwd/.env, затем $DSH_HOME/.env. |
| keyHide | Hide secret | Скрыть секрет |
| keyIllegalCharacters | This API key is not in a valid format. Please check it. | Этот API-ключ имеет недопустимый формат. Проверьте его. |
| keyInput | API key | API-ключ |
| keyPlaceholder | Enter your API key | Введите API-ключ |
| keyPlaceholderFallback | Leave blank to use env as auth ({hint}) | Оставьте пустым, чтобы использовать окружение для аутентификации ({hint}) |
| keyPlaceholderSaved | Leave blank to use saved credentials | Оставьте пустым, чтобы использовать сохранённые учётные данные |
| keyRequired | Enter an API key to continue. | Введите API-ключ, чтобы продолжить. |
| keyReveal | Show secret | Показать секрет |
| loadFailed | Loading the provider directory failed | Не удалось загрузить каталог провайдеров |
| maxTokens | Max output tokens | Максимум выходных токенов |
| maxTokensPlaceholder | Uses the provider default | Используется значение провайдера по умолчанию |
| model | Model | Модель |
| modelAdvanced | Model options | Параметры модели |
| modelCapacityInvalid | A capacity must be a number, optionally suffixed K or M. | Ёмкость должна быть числом, при необходимости с суффиксом K или M. |
| modelContextInvalid | Context window must be a positive count, like 131072, 256K, or 1M. | Контекстное окно должно быть положительным числом, например 131072, 256K или 1M. |
| modelDuplicate | Each model ID may appear once. | Каждый ID модели может встречаться только один раз. |
| modelId | Model ID | ID модели |
| modelIdDuplicate | Model ID must be unique. | ID модели должен быть уникальным. |
| modelIdRequired | Model ID is required. | Укажите ID модели. |
| modelInputImage | Image | Изображение |
| modelInputText | Text | Текст |
| modelInputTypes | Input types | Типы входных данных |
| modelMaxTokensInvalid | Max output tokens must be a positive count, like 8192, 64K, or 1M. | Максимум выходных токенов должен быть положительным числом, например 8192, 64K или 1M. |
| modelName | Display name | Отображаемое имя |
| modelNameInvalid | Display name cannot be empty. | Отображаемое имя не может быть пустым. |
| modelNamePlaceholder | Uses the model ID when empty | Если пусто, используется ID модели |
| modelReasoning | Reasoning levels | Уровни рассуждения |
| modelReasoningAdd | Add level | Добавить уровень |
| modelReasoningHelp | About reasoning levels | Об уровнях рассуждения |
| modelReasoningHelpText | The API value is sent in the request's reasoning-effort field, such as OpenAI's reasoning_effort. It defaults to the level name; where the model provider's API documentation specifies a different value, follow it. Off turns reasoning off and needs no value; a value already written in the configuration is kept and sent. | Значение API отправляется в поле reasoning-effort запроса, например в reasoning_effort у OpenAI. По умолчанию используется имя уровня; если документация API провайдера модели указывает другое значение, следуйте ей. «Выкл.» отключает рассуждение и не требует значения; значение, уже записанное в конфигурации, сохраняется и отправляется. |
| modelReasoningLevel | Level | Уровень |
| modelReasoningNeedsLevel | Add at least one level besides Off, or turn reasoning levels off. | Добавьте хотя бы один уровень помимо «Выкл.» или отключите уровни рассуждения. |
| modelReasoningOffValuePlaceholder | Turns reasoning off | Отключает рассуждение |
| modelReasoningRemove | Delete level | Удалить уровень |
| modelReasoningValue | API value | Значение API |
| modelReasoningValueRequired | Every level besides Off needs an API value, and no value can be empty. | Каждому уровню, кроме «Выкл.», нужно значение API, и ни одно значение не может быть пустым. |
| models | Models | Модели |
| modelsCustomized | Customized model catalog | Изменённый каталог моделей |
| modelsEmpty | No models will be shown in the selector. Unlisted IDs can still be sent directly. | В списке выбора не будет моделей. ID, отсутствующие в каталоге, всё равно можно отправлять напрямую. |
| modelsInherited | Using the adapter defaults | Используются значения адаптера по умолчанию |
| nav | Models | Модели |
| onboardingDescription | Configure the official DeepSeek provider to start building. | Настройте официального провайдера DeepSeek, чтобы начать работу. |
| onboardingLater | Configure later | Настроить позже |
| onboardingSave | Save and continue | Сохранить и продолжить |
| onboardingSaving | Saving… | Сохранение… |
| onboardingTitle | Add an API key to get started | Добавьте API-ключ, чтобы начать |
| protocolAnthropicMessages | Anthropic Messages | Anthropic Messages |
| protocolOpenAiCompletions | OpenAI Chat Completions | OpenAI Chat Completions |
| protocolOpenAiResponses | OpenAI Responses | OpenAI Responses |
| provider | Provider | Провайдер |
| readOnly | The settings document is read-only in this deployment. | Документ настроек доступен только для чтения в этом развёртывании. |
| remove | Delete | Удалить |
| removeModel | Delete model | Удалить модель |
| removeProvider | Delete {provider} | Удалить {provider} |
| resetModels | Restore defaults | Восстановить значения по умолчанию |
| retry | Retry | Повторить |
| savedProvider | Saved {provider}. | Сохранено: {provider}. |
| settingsPathUnresolvable | unresolvable settings path | неразрешимый путь к настройкам |
| title | Models | Модели |
| welcomeBody | DeepSeek Harness 0.2 is still in preview, and many areas need continued improvement and refinement. We welcome feedback and suggestions from all developers and users. The new desktop app now targets a broad range of users, while developer-related advanced features can be enabled in the settings. DeepSeek Harness’s product features and plugin APIs are expected to continue rapid iteration and evolution, and will gradually stabilize over time.<br><br>We look forward to exploring the limits of intelligence together with users and developers around the world, building on open-source, reusable, and composable infrastructure. We welcome everyone to bring their ideas to life with DeepSeek Harness and participate in the community to enrich the plugin ecosystem. | DeepSeek Harness 0.2 всё ещё находится в предварительной версии, и многие области требуют дальнейшего улучшения и доработки. Мы будем рады отзывам и предложениям от всех разработчиков и пользователей. Новое настольное приложение теперь ориентировано на широкую аудиторию, а расширенные функции для разработчиков можно включить в настройках. Ожидается, что продуктовые функции DeepSeek Harness и API плагинов продолжат быстро развиваться и со временем постепенно стабилизируются.<br><br>Мы надеемся вместе с пользователями и разработчиками со всего мира исследовать пределы интеллекта, опираясь на открытую, переиспользуемую и компонуемую инфраструктуру. Приглашаем всех воплощать свои идеи с помощью DeepSeek Harness и участвовать в сообществе, чтобы обогатить экосистему плагинов. |
| welcomeContinue | Continue | Продолжить |
| welcomeError | The acknowledgement could not be saved. Please try again. | Не удалось сохранить подтверждение. Попробуйте ещё раз. |
| welcomeTitle | Preview Notice | Уведомление о предварительной версии |

## settings.permission

| Ключ | English (original) | Русский |
|---|---|---|
| confirm.acknowledge | I understand the risks and want to continue | Я понимаю риски и хочу продолжить |
| confirm.cancel | Cancel | Отмена |
| confirm.description | Full access lets new sessions reduce confirmation steps and perform more actions directly, including sensitive operations, file changes, or external commands. Only use it when you trust subsequent tasks. | Полный доступ позволяет новым сессиям сокращать число подтверждений и выполнять больше действий напрямую, включая конфиденциальные операции, изменение файлов и внешние команды. Включайте его, только если доверяете последующим задачам. |
| confirm.enable | Enable Full access | Включить полный доступ |
| confirm.title | Enable Full access? | Включить полный доступ? |
| description | Choose the default permission mode for new sessions | Выберите режим разрешений по умолчанию для новых сессий |
| loading | Loading | Загрузка |
| preset.fullAccess | Full access | Полный доступ |
| preset.readOnly | Read Only | Только чтение |
| preset.workspaceWrite | Workspace Write | Запись в рабочей области |
| title | Permission | Разрешения |
| unavailable | Unavailable | Недоступно |

## settings.pluginInventory

| Ключ | English (original) | Русский |
|---|---|---|
| active | Running | Работает |
| clientSyncFailed | Some plugins could not sync on this page. Host enablement is unchanged. | Некоторым плагинам не удалось синхронизироваться на этой странице. Включение на хосте не изменилось. |
| clientSyncRetry | Retry this page | Повторить для этой страницы |
| clientSyncing | Syncing plugins on this page… | Синхронизация плагинов на этой странице… |
| condition | Disabled when | Отключён, если |
| conditionalTag | Conditional | Условный |
| configuration | Configuration | Конфигурация |
| disabledTag | Disabled | Отключён |
| empty | No plugins are available. | Нет доступных плагинов. |
| emptySearch | No matching plugins. | Подходящих плагинов нет. |
| enabledIn | Enabled in | Включён в |
| enabledTag | Enabled | Включён |
| error | Plugins are temporarily unavailable. | Плагины временно недоступны. |
| failed | Failed to start | Не удалось запустить |
| failedTag | Failed | Сбой |
| fromPreset | From | Из |
| globalSubtitle | Shared by the system and every session | Общие для системы и всех сессий |
| globalTitle | Global plugins | Глобальные плагины |
| loading | Reading plugins… | Чтение плагинов… |
| loadingPhase | Loading | Загрузка |
| matchesInOtherPresets | {count} more matches in other presets:  | Ещё {count} совпадений в других пресетах:  |
| metadataError | Package metadata error: {error} | Ошибка метаданных пакета: {error} |
| moduleLabel | Module | Модуль |
| pending | Waiting for dependencies | Ожидание зависимостей |
| presetEnabledTag | Via presets | Через пресеты |
| presetOptionBroken | {name} (failed to load) | {name} (не удалось загрузить) |
| presetOptionDefault | {name} (default) | {name} (по умолчанию) |
| presetProvidedDetail | Disabled globally; agent presets provide it per session | Отключён глобально; пресеты агентов предоставляют его для каждой сессии |
| presetSubtitle | Composed per session by agent presets | Собирается для каждой сессии пресетами агентов |
| presetTitle | Session plugins | Плагины сессий |
| retry | Retry | Повторить |
| runtime | Status | Статус |
| search | Search plugins | Поиск плагинов |
| switcherLabel | Choose the agent preset to inspect | Выберите пресет агента для просмотра |
| tab | Plugin list | Список плагинов |
| unloading | Unloading | Выгрузка |
| unobserved | Not running | Не запущен |

## settings.plugins

| Ключ | English (original) | Русский |
|---|---|---|
| empty | This deployment exposes no plugin views. | В этом развёртывании нет представлений плагинов. |
| intro | Inspect the plugins this deployment ships. | Просмотрите плагины, поставляемые в этом развёртывании. |
| nav | Built-in plugins | Встроенные плагины |
| tabs | Plugin views | Представления плагинов |
| title | Built-in plugins | Встроенные плагины |

## settings.sessionLog

| Ключ | English (original) | Русский |
|---|---|---|
| description | Help improve DeepSeek models and products. | Помогите улучшить модели и продукты DeepSeek. |
| failed | Could not save preference | Не удалось сохранить настройку |
| saved | Preference saved | Настройка сохранена |
| title | Upload Session Log when using the official model API | Отправлять журнал сессии при использовании официального API моделей |

## settings.shell

| Ключ | English (original) | Русский |
|---|---|---|
| description | Limit how long each command may run and how much it may output. | Ограничьте время выполнения каждой команды и объём её вывода. |
| invalidNumber | Enter a number, or leave blank to use the default. | Введите число или оставьте поле пустым, чтобы использовать значение по умолчанию. |
| maxOutputBytes | Output cap per stream (bytes) | Лимит вывода на поток (байты) |
| maxOutputBytesHint | Output beyond this spills to a temporary file rather than being lost. | Вывод сверх этого лимита сохраняется во временный файл, а не теряется. |
| overridden | Overridden | Переопределено |
| readOnly | This deployment stores settings read-only. | В этом развёртывании настройки хранятся только для чтения. |
| reset | Reset to default | Сбросить к значению по умолчанию |
| save | Save | Сохранить |
| saveFailed | The deployment did not accept these values; they were left for you to correct. | Развёртывание не приняло эти значения; они оставлены, чтобы вы их исправили. |
| saving | Saving… | Сохранение… |
| timeoutMs | Command timeout (ms) | Тайм-аут команды (мс) |
| timeoutMsHint | How long one command may run before it is terminated. | Сколько может выполняться одна команда до её принудительного завершения. |
| title | Shell | Оболочка |
| unavailable | This plugin is not loaded, so it cannot be configured right now. | Плагин не загружен, поэтому сейчас его нельзя настроить. |

## settings.subagent

| Ключ | English (original) | Русский |
|---|---|---|
| overridden | Overridden | Переопределено |
| readOnly | This deployment stores settings read-only. | В этом развёртывании настройки хранятся только для чтения. |
| reset | Reset to default | Сбросить к значению по умолчанию |
| save | Save | Сохранить |
| saveFailed | The deployment did not accept these values; they were left for you to correct. | Развёртывание не приняло эти значения; они оставлены, чтобы вы их исправили. |
| saving | Saving… | Сохранение… |
| subagentCapacityHelp | Total live Subagents under the same main Agent, across all recursion levels. The main Agent is excluded. New start requests are rejected when the limit is reached. | Общее число активных субагентов под одним главным агентом на всех уровнях рекурсии. Главный агент не учитывается. При достижении лимита новые запросы на запуск отклоняются. |
| subagentCapacityHelpLabel | About the Subagent parallelism limit | О лимите параллелизма субагентов |
| subagentCapacityInvalid | Enter a whole number of 1 or more. | Введите целое число от 1. |
| subagentDepthHelp | Limits how many levels of Subagents an Agent can create. | Ограничивает, сколько уровней субагентов может создавать агент. |
| subagentDepthHelpLabel | About maximum recursion depth | О максимальной глубине рекурсии |
| subagentDepthInvalid | Enter a whole number of 0 or more. | Введите целое число от 0. |
| subagentDepthOne | Only the main Agent can create Subagents | Только главный агент может создавать субагентов |
| subagentDepthOverride | If a tool defines its own maximum recursion depth, that setting takes precedence. | Если инструмент задаёт собственную максимальную глубину рекурсии, приоритет у этой настройки. |
| subagentDepthZero | Disable Subagents | Отключить субагентов |
| subagentDescription | Set Subagent recursion depth, count, and models. | Настройте глубину рекурсии, число и модели субагентов. |
| subagentLimitsTitle | Limits | Лимиты |
| subagentMaxActive | Subagent parallelism limit | Лимит параллелизма субагентов |
| subagentMaxDepth | Maximum recursion depth | Максимальная глубина рекурсии |
| subagentModelSelectionAllowed | Models agents may choose | Модели, которые могут выбирать агенты |
| subagentModelSelectionChoose | When enabled, agents can choose a provider, model, and reasoning effort for each Subagent from the authorized models below. Applies only to new sessions. | Если включено, агенты могут выбирать провайдера, модель и уровень рассуждения для каждого субагента из разрешённых моделей ниже. Действует только для новых сессий. |
| subagentModelSelectionConflict | Settings changed elsewhere. Discard your draft and try again. | Настройки изменились в другом месте. Отмените черновик и попробуйте снова. |
| subagentModelSelectionEmpty | No model provider currently advertises a model. | Сейчас ни один провайдер моделей не предлагает моделей. |
| subagentModelSelectionLoadFailed | Models could not be loaded. | Не удалось загрузить модели. |
| subagentModelSelectionLoading | Loading models… | Загрузка моделей… |
| subagentModelSelectionOff | Subagents use configured defaults or inherit the parent agent's model. Saved model choices are retained. | Субагенты используют настроенные значения по умолчанию или наследуют модель родительского агента. Сохранённый выбор моделей сохраняется. |
| subagentModelSelectionPartial | Some model providers could not be loaded; saved choices remain removable. | Некоторые провайдеры моделей не удалось загрузить; сохранённый выбор всё равно можно удалить. |
| subagentModelSelectionRequired | Select at least one model before saving. | Выберите хотя бы одну модель перед сохранением. |
| subagentModelSelectionRetry | Retry | Повторить |
| subagentModelSelectionTitle | Model selection | Выбор моделей |
| subagentModelSelectionToggle | Allow agents to choose models for Subagents | Разрешить агентам выбирать модели для субагентов |
| subagentModelSelectionUnavailable | Currently unavailable | Сейчас недоступно |
| subagentModelSelectionUnavailableGroup | Saved but currently unavailable | Сохранено, но сейчас недоступно |
| subagentTitle | Subagent | Субагент |
| unavailable | This plugin is not loaded, so it cannot be configured right now. | Плагин не загружен, поэтому сейчас его нельзя настроить. |

## settings.theme

| Ключ | English (original) | Русский |
|---|---|---|
| appearance.dark | Dark | Тёмная |
| appearance.light | Light | Светлая |
| appearance.system | System | Системная |
| appearance.title | Appearance | Оформление |
| fontFamily.code.description | Used for code blocks, inline code, and tool output. Separate fonts with commas; leave empty for the default | Используется для блоков кода, встроенного кода и вывода инструментов. Разделяйте шрифты запятыми; оставьте пустым для значения по умолчанию |
| fontFamily.code.title | Code font | Шрифт кода |
| fontFamily.placeholder | Default | По умолчанию |
| fontFamily.terminal.description | Used for the sidebar terminal. Separate fonts with commas; leave empty for the default | Используется для терминала в боковой панели. Разделяйте шрифты запятыми; оставьте пустым для значения по умолчанию |
| fontFamily.terminal.title | Terminal font | Шрифт терминала |
| fontFamily.text.description | Used for the interface and conversation text. Separate fonts with commas; leave empty for the default | Используется для интерфейса и текста переписки. Разделяйте шрифты запятыми; оставьте пустым для значения по умолчанию |
| fontFamily.text.title | Text font | Шрифт текста |
| fontSize.code.decrease | Decrease code font size | Уменьшить шрифт кода |
| fontSize.code.description | Used for code blocks, inline code, and tool output | Используется для блоков кода, встроенного кода и вывода инструментов |
| fontSize.code.increase | Increase code font size | Увеличить шрифт кода |
| fontSize.code.title | Code font size | Размер шрифта кода |
| fontSize.more | More font settings | Другие настройки шрифтов |
| fontSize.terminal.decrease | Decrease terminal font size | Уменьшить шрифт терминала |
| fontSize.terminal.description | Used for the sidebar terminal | Используется для терминала в боковой панели |
| fontSize.terminal.increase | Increase terminal font size | Увеличить шрифт терминала |
| fontSize.terminal.title | Terminal font size | Размер шрифта терминала |
| fontSize.text.decrease | Decrease font size | Уменьшить шрифт |
| fontSize.text.description | Only affects conversation content | Влияет только на содержимое переписки |
| fontSize.text.increase | Increase font size | Увеличить шрифт |
| fontSize.text.title | Font size | Размер шрифта |
| fontSize.unit | px | px |

## settings.webSearch

| Ключ | English (original) | Русский |
|---|---|---|
| apiKey | API key | API-ключ |
| apiKeyHint | Stored outside the settings file. Leave blank to keep the current key. | Хранится вне файла настроек. Оставьте пустым, чтобы сохранить текущий ключ. |
| apiKeySet | A key is configured. | Ключ настроен. |
| apiKeyUnset | No key is configured; only conversations using a DeepSeek Account model can search, through the default endpoint. | Ключ не настроен; искать могут только диалоги с моделью из аккаунта DeepSeek — через конечную точку по умолчанию. |
| baseUrl | Messages API base URL | Базовый URL API Messages |
| baseUrlHint | Include the API prefix, such as https://api.deepseek.com/anthropic/v1. The provider appends /messages. Leave blank to restore the default. | Укажите префикс API, например https://api.deepseek.com/anthropic/v1. Провайдер добавит /messages. Оставьте пустым, чтобы вернуть значение по умолчанию. |
| count | Results per search | Результатов на поиск |
| countHint | Results returned per query: an integer from 1 to 50, default 10. This controls result count, not search calls. web_search keeps no more sources than its own result limit. | Сколько результатов возвращается на запрос: целое число от 1 до 50, по умолчанию 10. Это управляет числом результатов, а не числом поисковых вызовов. web_search хранит не больше источников, чем позволяет его собственный лимит результатов. |
| description | Set up the DeepSeek search provider. | Настройте провайдера поиска DeepSeek. |
| invalidCount | Enter an integer from 1 to 50, or leave blank to use the default. | Введите целое число от 1 до 50 или оставьте поле пустым, чтобы использовать значение по умолчанию. |
| invalidNumber | Enter a number, or leave blank to use the default. | Введите число или оставьте поле пустым, чтобы использовать значение по умолчанию. |
| maxUses | Max searches per request | Максимум поисков на запрос |
| maxUsesHint | How many searches the auxiliary model may run within one Messages request. Applies only to the Messages API. | Сколько поисков вспомогательная модель может выполнить в рамках одного запроса Messages. Действует только для API Messages. |
| overridden | Overridden | Переопределено |
| readOnly | This deployment stores settings read-only. | В этом развёртывании настройки хранятся только для чтения. |
| reset | Reset to default | Сбросить к значению по умолчанию |
| save | Save | Сохранить |
| saveFailed | The deployment did not accept these values; they were left for you to correct. | Развёртывание не приняло эти значения; они оставлены, чтобы вы их исправили. |
| saving | Saving… | Сохранение… |
| searchApiBaseUrl | Search / Fetch API base URL | Базовый URL API поиска и загрузки |
| searchApiBaseUrlHint | Include the API prefix, such as https://api.deepseek.com/v1/tools. The provider appends /search or /fetch. Leave blank to restore the default. | Укажите префикс API, например https://api.deepseek.com/v1/tools. Провайдер добавит /search или /fetch. Оставьте пустым, чтобы вернуть значение по умолчанию. |
| searchGuide | Search & Fetch guide | Руководство по поиску и загрузке |
| searchGuideUrl | https://api-docs.deepseek.com/guides/search | https://api-docs.deepseek.com/guides/search |
| title | Web search | Веб-поиск |
| unavailable | This plugin is not loaded, so it cannot be configured right now. | Плагин не загружен, поэтому сейчас его нельзя настроить. |
| useSearchApi | Use the new Web Search API | Использовать новый API веб-поиска |
| useSearchApiHint | Off by default: search runs through DeepSeek Messages. For the new Web Search API's features and pricing, see the  | По умолчанию выключено: поиск идёт через DeepSeek Messages. Возможности и цены нового API веб-поиска см. в  |

## shortcuts

| Ключ | English (original) | Русский |
|---|---|---|
| application | Application | Приложение |
| approval | Approval area | Область подтверждения |
| cancel | Cancel | Отмена |
| clear | Remove | Удалить |
| clear-search | Clear search | Очистить поиск |
| close | Close keyboard shortcuts | Закрыть сочетания клавиш |
| close-confirmation | Close confirmation | Закрыть подтверждение |
| conflict | Already used by “{commands}” | Уже используется в «{commands}» |
| description | View and edit available shortcuts and input actions | Просмотр и изменение доступных сочетаний клавиш и действий ввода |
| desktop-document | userData/keybindings.json | userData/keybindings.json |
| desktop-reload | restart Harness | перезапустить Harness |
| dismiss | Close menu or top dialog | Закрыть меню или верхний диалог |
| edit-label | Edit shortcut for {command} | Изменить сочетание клавиш для {command} |
| empty | No matching shortcuts | Подходящих сочетаний нет |
| future | Shortcut configuration in {location} was created by a newer version. Upgrade Harness and try again. | Конфигурация сочетаний клавиш в {location} создана более новой версией. Обновите Harness и попробуйте снова. |
| global-hint | Open from anywhere | Открыть из любого места |
| input | Message input | Ввод сообщения |
| invalid | Shortcut configuration in {location} is damaged. Back up and repair this configuration, then {reload}. | Конфигурация сочетаний клавиш в {location} повреждена. Сделайте резервную копию и исправьте её, затем {reload}. |
| macos-web-help | Use Command+/, Command+,, Command+Backslash, Control+Backquote, Command+Option+key, or Command+Shift+key. Combinations with three or four distinct modifiers are also supported. Browser or system shortcuts may not reach the page. | Используйте Command+/, Command+,, Command+Backslash, Control+Backquote, Command+Option+клавиша или Command+Shift+клавиша. Также поддерживаются сочетания с тремя или четырьмя разными модификаторами. Сочетания браузера или системы могут не доходить до страницы. |
| menus | Menus and dialogs | Меню и диалоги |
| modified-count | {count} customized | Изменено: {count} |
| modifier-required | Include Command, Ctrl, or Alt in the combination. | Включите в комбинацию Command, Ctrl или Alt. |
| move | Move menu selection | Переместить выбор в меню |
| native-failed | Could not protect desktop key recording. Exit recording and try again. | Не удалось включить защиту записи клавиш. Выйдите из записи и повторите. |
| not-ready | Shortcuts are not ready. Please try again. | Сочетания клавиш не готовы. Повторите попытку. |
| open | Open keyboard shortcuts | Открыть сочетания клавиш |
| read | Could not read {location}. Check access permissions, then {reload}. | Не удалось прочитать {location}. Проверьте права доступа, затем {reload}. |
| record | Press a shortcut | Нажмите сочетание клавиш |
| record-help | Release the keys to save. Tab moves between actions; Esc cancels. | Отпустите клавиши, чтобы сохранить. Tab переключает действия; Esc отменяет. |
| reserved | This combination is reserved for system or text editing actions. | Эта комбинация зарезервирована для системных действий или редактирования текста. |
| reset | Restore default | Восстановить по умолчанию |
| reset-all | Restore all defaults | Восстановить все значения по умолчанию |
| reset-description | Restore the default shortcuts for this platform. All modified or removed shortcuts will be restored. Other platforms are unaffected. | Восстановить стандартные сочетания клавиш для этой платформы. Все изменённые или удалённые сочетания будут восстановлены. Другие платформы не затрагиваются. |
| reset-failed | Could not restore defaults. Your shortcuts are unchanged. Please retry. | Не удалось восстановить значения по умолчанию. Ваши сочетания не изменены. Повторите попытку. |
| reset-saved | Default shortcuts restored | Стандартные сочетания восстановлены |
| reset-title | Restore all default shortcuts? | Восстановить все стандартные сочетания? |
| retry-save | Retry save | Повторить сохранение |
| review | I have reviewed the latest configuration | Я ознакомился с последней конфигурацией |
| saved | Modified | Изменено |
| search | Search shortcuts | Поиск сочетаний |
| select | Select menu item | Выбрать пункт меню |
| settings | Keyboard shortcuts | Сочетания клавиш |
| stale | Shortcut configuration or available commands changed. Review the latest bindings before saving. | Конфигурация сочетаний или доступные команды изменились. Проверьте актуальные привязки перед сохранением. |
| title | Keyboard shortcuts | Сочетания клавиш |
| too-many-keys | Hold at most two non-modifier keys. Release the keys to try again. | Удерживайте не более двух клавиш без модификаторов. Отпустите клавиши и повторите. |
| unbound | No shortcut | Без сочетания |
| unsupported-browser | This browser does not support this combination yet. | Этот браузер пока не поддерживает такую комбинацию. |
| unsupported-key | This key is not supported. | Эта клавиша не поддерживается. |
| using-accepted | The last successfully read bindings remain active. | Действуют последние успешно прочитанные привязки. |
| using-defaults | Default bindings are active. | Действуют привязки по умолчанию. |
| view | Edit shortcuts | Изменить сочетания |
| web-document | this site’s localStorage entry dsh.keybindings.v1 | запись dsh.keybindings.v1 в localStorage этого сайта |
| web-help | Browser combinations: Mod+/, Mod+Shift+,, Mod+Shift+.. Mod is Command on Mac and Ctrl elsewhere. | Комбинации браузера: Mod+/, Mod+Shift+,, Mod+Shift+.. Mod — это Command на Mac и Ctrl в остальных системах. |
| web-reload | reload the page | перезагрузите страницу |
| windows-web-help | Use Ctrl+/, Ctrl+,, Ctrl+Alt+key, or Ctrl+Shift+key. Combinations with three or four distinct modifiers are also supported. Browser or system shortcuts may not reach the page. | Используйте Ctrl+/, Ctrl+,, Ctrl+Alt+клавиша или Ctrl+Shift+клавиша. Также поддерживаются комбинации с тремя или четырьмя разными модификаторами. Сочетания браузера или системы могут не доходить до страницы. |
| write-failed | Could not save. Your previous shortcuts and current draft are preserved. Please retry. | Не удалось сохранить. Предыдущие сочетания и текущий черновик сохранены. Повторите попытку. |

## shortcuts.layout

| Ключ | English (original) | Русский |
|---|---|---|
| toggle | Toggle left sidebar | Переключить левую боковую панель |

## sidebar

| Ключ | English (original) | Русский |
|---|---|---|
| panels.label | Global panels | Глобальные панели |
| panels.more | More | Ещё |
| session.new | New Session | Новая сессия |
| session.new.label | New session | Новая сессия |
| toggle.collapse | Collapse sidebar | Свернуть боковую панель |
| toggle.open | Open sidebar | Открыть боковую панель |

## sidebarBrowser

| Ключ | English (original) | Русский |
|---|---|---|
| address.changed | URL changed | URL изменён |
| address.placeholder | Enter an HTTP(S) address | Введите адрес HTTP(S) |
| address.unknown | The page navigated; this carrier cannot read its new URL. | Страница перешла; этот контейнер не может прочитать её новый URL. |
| back | Back | Назад |
| error.application-origin | The embedded browser cannot open the DSH application itself. | Встроенный браузер не может открыть само приложение DSH. |
| error.credentials | Addresses cannot contain a username or password. | Адреса не могут содержать имя пользователя или пароль. |
| error.empty | Enter an address. | Введите адрес. |
| error.invalid | That address is invalid or too long. | Адрес недействителен или слишком длинный. |
| error.protocol | Only HTTP and HTTPS addresses are supported; use Document Preview for local files. | Поддерживаются только адреса HTTP и HTTPS; для локальных файлов используйте предпросмотр документов. |
| external | Open in system browser | Открыть в системном браузере |
| forward | Forward | Вперёд |
| go | Go | Перейти |
| guide.description | Browse web pages | Просмотр веб-страниц |
| guide.title | Browser | Браузер |
| load.failed | The page could not load; reload or open it in the system browser. | Страницу не удалось загрузить; перезагрузите её или откройте в системном браузере. |
| load.failed.detail | Page load failed ({code}): {description} | Не удалось загрузить страницу ({code}): {description} |
| loading | Opening… | Открытие… |
| reload | Reload | Перезагрузить |
| restore.action | Restore page | Восстановить страницу |
| restore.previous | Previously opened | Открытые ранее |
| sandbox.disable | Disable sandbox restrictions | Отключить ограничения песочницы |
| sandbox.enable | Restore sandbox restrictions | Восстановить ограничения песочницы |
| sandbox.warning | Sandbox restrictions are disabled; the page can navigate the top-level app and use downloads, modal dialogs, and input locks. | Ограничения песочницы отключены; страница может управлять приложением верхнего уровня, а также использовать загрузки, модальные диалоги и блокировки ввода. |
| shortcut.noSession | Open a session first | Сначала откройте сессию |
| start | Enter an HTTP(S) address to start browsing | Введите адрес HTTP(S), чтобы начать просмотр |
| type.label | Browser | Браузер |

## sidebarCodePreview

| Ключ | English (original) | Русский |
|---|---|---|
| copied | Copied | Скопировано |
| copy | Copy | Копировать |
| title | Code | Код |

## sidebarDocumentPreview

| Ключ | English (original) | Русский |
|---|---|---|
| autoRefresh | Auto refresh | Автообновление |
| autoRefresh.disable | Disable auto refresh | Отключить автообновление |
| autoRefresh.enable | Enable auto refresh | Включить автообновление |
| changed | The file has changed, showing the previous content. | Файл изменился, показано предыдущее содержимое. |
| error.notFound | File not found. It may have been moved or deleted. | Файл не найден. Возможно, он перемещён или удалён. |
| error.notRegularFile | Not a regular file, nothing to display. | Это не обычный файл, показывать нечего. |
| error.notText | Preview is not available for this file type yet. | Предпросмотр для этого типа файлов пока недоступен. |
| error.tooLarge | This page exceeds the {limit} limit and cannot be read. | Эта страница превышает лимит {limit} и не может быть прочитана. |
| error.unavailable | Read failed: {message} | Ошибка чтения: {message} |
| loadMore | Load more | Загрузить ещё |
| loading | Rendering document... | Отрисовка документа... |
| openWith | Open with | Открыть с помощью |
| reload | Read the file again | Прочитать файл заново |
| reloadNow | Reload | Перезагрузить |
| rendererUnavailable | The {name} preview is unavailable. | Предпросмотр {name} недоступен. |
| resourceUnavailable | The file resource service is unavailable. | Служба файловых ресурсов недоступна. |
| retry | Retry | Повторить |
| unsupportedFile | Preview is not available for this file type yet. | Предпросмотр для этого типа файлов пока недоступен. |
| viewer.text | Plain text | Обычный текст |
| wrap.aria | Line wrap | Перенос строк |
| wrap.disable | Turn off line wrap | Отключить перенос строк |
| wrap.enable | Turn on line wrap | Включить перенос строк |

## sidebarExcel

| Ключ | English (original) | Русский |
|---|---|---|
| charts | charts | диаграммы |
| conditionalFormatting | conditional formatting | условное форматирование |
| encoding | This text encoding could not be read. Save the file as UTF-8 or UTF-16 with a BOM and retry. | Не удалось прочитать эту кодировку текста. Сохраните файл в UTF-8 или UTF-16 с BOM и повторите. |
| featureSeparator | ,  | ,  |
| formulaWarning | This workbook contains formulas. Displayed results may be missing or inaccurate. | Эта книга содержит формулы. Отображаемые результаты могут отсутствовать или быть неточными. |
| images | images | изображения |
| invalid | This spreadsheet could not be opened. Check its format, contents, or password protection. | Не удалось открыть эту таблицу. Проверьте формат, содержимое или защиту паролем. |
| language | en | en |
| loading | Rendering document... | Отрисовка документа... |
| retry | Retry | Повторить |
| shapes | shapes | фигуры |
| timeout | Opening this workbook timed out. Try a smaller file. | Время открытия книги истекло. Попробуйте файл меньшего размера. |
| title | Spreadsheet | Таблица |
| tooLarge | This workbook exceeds the preview size limit. | Эта книга превышает ограничение размера для предпросмотра. |
| unsupportedNotice | This preview does not support {features} in this workbook. Open it in a system application for the full experience. | Этот предпросмотр не поддерживает {features} в этой книге. Откройте её в системном приложении для полной функциональности. |

## sidebarFiles

| Ключ | English (original) | Русский |
|---|---|---|
| autoRefresh | Auto refresh | Автообновление |
| autoRefresh.disable | Disable auto refresh | Отключить автообновление |
| autoRefresh.enable | Enable auto refresh | Включить автообновление |
| empty | Empty directory | Пустая папка |
| entry.other | Not a file or a directory, so it cannot be opened. | Это не файл и не папка, поэтому открыть нельзя. |
| error.notDirectory | That is not a directory. | Это не папка. |
| error.notFound | That directory is gone. It may have been moved or deleted. | Папка исчезла. Возможно, она перемещена или удалена. |
| error.outsideWorkspace | That directory is outside the workspace, so the sidebar will not read it. | Эта папка находится вне рабочей области, поэтому боковая панель не будет её читать. |
| error.unavailable | Read failed: {message} | Ошибка чтения: {message} |
| guide.description | Browse files in this session's workspace | Просмотр файлов в рабочей области этой сессии |
| guide.title | Workspace files | Файлы рабочей области |
| loading | Reading… | Чтение… |
| noWorkspace | This session has no workspace directory. | У этой сессии нет папки рабочей области. |
| reload | Reload | Перезагрузить |
| shortcut.noSession | Select a session first | Сначала выберите сессию |
| truncated | Too many entries, showing only some of them. | Слишком много элементов, показаны только некоторые. |
| type.label | Files | Файлы |

## sidebarImage

| Ключ | English (original) | Русский |
|---|---|---|
| failed | This image could not be displayed. | Не удалось показать это изображение. |
| loading | Rendering document... | Отрисовка документа... |
| preview | Image preview: {name} | Предпросмотр изображения: {name} |
| title | Image | Изображение |
| unsupported | Image preview requires the complete file contents. | Для предпросмотра изображения нужны полные данные файла. |
| zoomControls | Zoom controls | Управление масштабом |
| zoomFitWidth | Fit width | По ширине |
| zoomIn | Zoom in | Увеличить |
| zoomMenu | Choose zoom | Выбрать масштаб |
| zoomOut | Zoom out | Уменьшить |
| zoomValue | {percent}% | {percent}% |

## sidebarOffice

| Ключ | English (original) | Русский |
|---|---|---|
| busy | Office preview is busy. Try again shortly. | Предпросмотр Office занят. Повторите попытку чуть позже. |
| changed | The file changed while being read. Reopen the preview. | Файл изменился во время чтения. Откройте предпросмотр заново. |
| closeDetails | Close font details | Закрыть сведения о шрифтах |
| failed | Office conversion did not produce a usable PDF. Check the file and try again. | Преобразование Office не дало пригодный PDF. Проверьте файл и повторите. |
| invalid | This Office file cannot be previewed. It may be damaged, password protected, or have the wrong extension. | Этот файл Office нельзя просмотреть. Возможно, он повреждён, защищён паролем или имеет неверное расширение. |
| loading | Rendering document... | Отрисовка документа... |
| missingFontsCount | Fonts: {count} | Шрифты: {count} |
| missingFontsDescription | These fonts are unavailable for this preview. Text and layout may differ from the original document. | Эти шрифты недоступны для этого предпросмотра. Текст и вёрстка могут отличаться от исходного документа. |
| missingFontsTitle | Missing fonts | Отсутствующие шрифты |
| retry | Retry | Повторить |
| timeout | Office conversion timed out. Try again. | Время преобразования Office истекло. Повторите попытку. |
| title | Office document | Документ Office |
| tooLarge | The Office file or converted PDF exceeds the preview size limit. Reduce the file size or adjust the preview configuration. | Файл Office или преобразованный PDF превышает ограничение размера для предпросмотра. Уменьшите размер файла или измените настройки предпросмотра. |
| unavailable | Office previews are unavailable. Enable the document preview service on the computer running DeepSeek Harness. | Предпросмотр Office недоступен. Включите службу предпросмотра документов на компьютере с DeepSeek Harness. |
| viewMissingFonts | Missing fonts: {count}. Click to view. | Отсутствующие шрифты: {count}. Нажмите, чтобы просмотреть. |

## sidebarPdf

| Ключ | English (original) | Русский |
|---|---|---|
| failed | Cannot display PDF: {message} | Не удалось показать PDF: {message} |
| loading | Rendering document... | Отрисовка документа... |
| pageImage | PDF page {page} | Страница PDF {page} |
| password | This PDF requires a password; password-protected previews are not supported. | Этот PDF требует пароль; предпросмотр файлов с паролем не поддерживается. |
| rendering | Rendering page… | Отрисовка страницы… |
| retry | Retry | Повторить |
| title | PDF | PDF |
| unsupported | PDF preview requires the complete file contents. | Для предпросмотра PDF нужны полные данные файла. |
| workerFailed | The PDF rendering process could not continue. Please retry. | Процесс отрисовки PDF не смог продолжить работу. Повторите попытку. |
| zoomControls | Zoom controls | Управление масштабом |
| zoomFitWidth | Fit width | По ширине |
| zoomIn | Zoom in | Увеличить |
| zoomMenu | Choose zoom | Выбрать масштаб |
| zoomOut | Zoom out | Уменьшить |
| zoomValue | {percent}% | {percent}% |

## sidebarRight

| Ключ | English (original) | Русский |
|---|---|---|
| chrome.collapse | Collapse sidebar | Свернуть боковую панель |
| chrome.collapseAria | Collapse right sidebar | Свернуть правую боковую панель |
| chrome.exitFullscreen | Exit fullscreen | Выйти из полноэкранного режима |
| chrome.expand | Open sidebar | Открыть боковую панель |
| chrome.expandAria | Open right sidebar | Открыть правую боковую панель |
| chrome.toFullscreen | Fullscreen | Полный экран |
| command.budget | Two panes is the limit | Максимум две панели |
| command.close | Close current page or window | Закрыть текущую страницу или окно |
| command.collapsed | Expand the right sidebar first | Сначала разверните правую боковую панель |
| command.empty | Open a page first | Сначала откройте страницу |
| command.float | This action is unavailable in a floating panel | Это действие недоступно в плавающей панели |
| command.fullscreen | Toggle panel fullscreen | Переключить полноэкранный режим панели |
| command.noFocus | Focus a right sidebar pane first | Сначала перейдите в панель справа |
| command.noRefresh | This page cannot be refreshed | Эту страницу нельзя обновить |
| command.noSession | Select a session first | Сначала выберите сессию |
| command.refresh | Refresh current page | Обновить текущую страницу |
| command.stale | The page changed; focus it again | Страница изменилась; перейдите в неё снова |
| command.toggle | Toggle right sidebar | Переключить правую боковую панель |
| command.width | Not enough width to split, widen the sidebar | Недостаточно ширины для разделения, расширьте боковую панель |
| dock.addTab | New tab | Новая вкладка |
| dock.closeFloat | Close | Закрыть |
| dock.closeTab | Close | Закрыть |
| dock.dockFloat | Send back to the sidebar | Вернуть в боковую панель |
| dock.drop.bottom | Add bottom split | Добавить разделение снизу |
| dock.drop.center | Move here | Переместить сюда |
| dock.drop.left | Add left split | Добавить разделение слева |
| dock.drop.right | Add right split | Добавить разделение справа |
| dock.drop.top | Add top split | Добавить разделение сверху |
| dock.emptyPane | Empty pane | Пустая панель |
| dock.splitPane | Split | Разделить |
| dock.splitPaneDisabled | Two panes is the limit | Максимум две панели |
| dock.splitPaneNarrow | Not enough width to split, widen the sidebar | Недостаточно ширины для разделения, расширьте боковую панель |
| tab.guide.more | More tools | Другие инструменты |
| tab.guide.title | Start | Начало |
| tab.unavailable | Nothing here can view this kind of content yet. | Здесь пока нечем просмотреть такое содержимое. |

## sidebarTerminal

| Ключ | English (original) | Русский |
|---|---|---|
| attachmentEnded | The terminal connection ended. Reconnect to continue. | Соединение с терминалом прервано. Переподключитесь, чтобы продолжить. |
| cleanupFailed | Terminal “{title}” could not be ended: {message} | Не удалось завершить терминал «{title}»: {message} |
| closed | Terminal closed. | Терминал закрыт. |
| connecting | Connecting… | Подключение… |
| control | Take control | Взять управление |
| creating | Starting… | Запуск… |
| description | Run commands in the Session workspace | Выполнение команд в рабочей области сессии |
| disconnected | Disconnected. | Отключено. |
| exited | Process exited ({code}) | Процесс завершён ({code}) |
| failed | Terminal error: {message} | Ошибка терминала: {message} |
| inputFull | The input buffer is full. Reconnect and try again. | Буфер ввода заполнен. Переподключитесь и повторите. |
| invalidOutput | The terminal screen could not be received. Reconnect to recover it. | Не удалось получить экран терминала. Переподключитесь для восстановления. |
| loading | Reading terminal environment… | Чтение окружения терминала… |
| missingTerminal | This terminal no longer exists. Open a new terminal. | Этот терминал больше не существует. Откройте новый терминал. |
| new | New terminal | Новый терминал |
| readonly | This view is read-only. | Этот просмотр доступен только для чтения. |
| reconnect | Reconnect | Переподключиться |
| recoveryFailed | Terminal recovery failed: {message} | Не удалось восстановить терминал: {message} |
| rename | Terminal name | Название терминала |
| retry | Retry | Повторить |
| retryRecovery | Retry terminal recovery | Повторить восстановление терминала |
| shell | Choose shell | Выбрать оболочку |
| shellEmpty | No shells available | Нет доступных оболочек |
| shellLoading | Loading shells… | Загрузка оболочек… |
| shortcut.noSession | Select a session first | Сначала выберите сессию |
| terminalLimit | The terminal limit has been reached. Close unused terminals and try again. Exited terminals also count toward the limit. | Достигнут лимит терминалов. Закройте неиспользуемые терминалы и повторите. Завершённые терминалы тоже учитываются в лимите. |
| title | Terminal | Терминал |
| unavailable | Unavailable | Недоступно |

## skill

| Ключ | English (original) | Русский |
|---|---|---|
| menu.userOnly | user-only | только для пользователя |
| row.failed | Skill load failed | Не удалось загрузить навык |
| row.inspect | Inspect | Просмотр |
| row.instructions | Instructions | Инструкции |
| row.preparing | Preparing to load a skill | Подготовка к загрузке навыка |
| row.running | Loading skill | Загрузка навыка |
| row.stopped | Skill load stopped | Загрузка навыка остановлена |
| row.title | Skill | Навык |

## slash.menu

| Ключ | English (original) | Русский |
|---|---|---|
| command | Commands | Команды |
| crumbs.aria | Folder navigation | Навигация по папкам |
| drill.aria | Browse folder | Открыть папку |
| drill.hint | Browse folder | Открыть папку |
| drill.key | Tab | Tab |
| loading | Loading… | Загрузка… |
| skill | Skills | Навыки |
| subagent | Subagents | Субагенты |
| suggestions.aria | Trigger suggestions | Подсказки триггеров |

## subagent

| Ключ | English (original) | Русский |
|---|---|---|
| activity.completed | completed | завершено |
| activity.inactive | not running | не выполняется |
| activity.running | running | выполняется |
| branch.collapse | Collapse {label} descendants | Свернуть потомков {label} |
| branch.expand | Expand {label} descendants | Развернуть потомков {label} |
| catalog.migrationRequired | Migration required | Требуется миграция |
| count.running.one | {count} subagent running | {count} субагент выполняется |
| count.running.other | {count} subagents running | {count} субагентов выполняется |
| count.total.one | {count} subagent | {count} субагент |
| count.total.other | {count} subagents | {count} субагентов |
| duration.days | {days}d | {days}д |
| duration.daysHours | {days}d {hours}h | {days}д {hours}ч |
| duration.exactDays | {days}d {hours}h {minutes}m {seconds}s | {days}д {hours}ч {minutes}м {seconds}с |
| duration.exactTitle | Total active duration: {duration} | Общее активное время: {duration} |
| duration.hours | {hours}h {minutes}m {seconds}s | {hours}ч {minutes}м {seconds}с |
| duration.minutes | {minutes}m {seconds}s | {minutes}м {seconds}с |
| duration.months | ~{months}mo | ~{months}мес |
| duration.monthsDays | ~{months}mo {days}d | ~{months}мес {days}д |
| duration.seconds | {seconds}s | {seconds}с |
| duration.years | ~{years}y | ~{years}г |
| duration.yearsMonths | ~{years}y {months}mo | ~{years}г {months}мес |
| load.error | Unable to load subagents | Не удалось загрузить субагентов |
| loading.label | Loading subagents… | Загрузка субагентов… |
| mode.continuable | continuable | продолжаемый |
| mode.external | External task | Внешняя задача |
| mode.oneShot | one-shot | одноразовый |
| mode.unknown | unknown mode | неизвестный режим |
| open.sidebar | Open in sidebar | Открыть в боковой панели |
| open.sidebar.aria | Open {label} in sidebar | Открыть {label} в боковой панели |
| readonly.body | The parent session is offline; reopen it to continue sending messages. | Родительская сессия неактивна; откройте её заново, чтобы продолжить отправлять сообщения. |
| readonly.oneShot.body | One-shot tasks do not accept follow-ups; review the full execution record here. | Одноразовые задачи не принимают продолжений; здесь можно изучить полную запись выполнения. |
| readonly.oneShot.title | One-shot subagent record | Запись одноразового субагента |
| readonly.title | This subagent is read-only for now | Этот субагент пока доступен только для чтения |
| readonly.unknown.body | Read the child session to determine whether it can be continued. | Откройте дочернюю сессию, чтобы определить, можно ли её продолжить. |
| retry | Retry | Повторить |
| sidebar.chat | Chat | Чат |
| switcher.aria | Switch subagent: {title} | Переключить субагента: {title} |
| tokens.million | {value}M | {value} млн |
| tokens.thousand | {value}K | {value} тыс. |
| tokens.total | {value} tok | {value} ток. |
| tree.aria | Subagent sessions | Сессии субагентов |

## trajectory

| Ключ | English (original) | Русский |
|---|---|---|
| attachment.imageName | Image {index} | Изображение {index} |
| attachment.list | Attachments | Вложения |
| block.label | Block #{index} {type} | Блок #{index} {type} |
| block.openSummary | Open Block #{index} tool call summary | Открыть сводку вызова инструмента блока #{index} |
| block.openSummaryTitle | Open tool call summary | Открыть сводку вызова инструмента |
| code.copyOutput | Copy output | Копировать вывод |
| code.copySource | Copy code | Копировать код |
| code.originalJson | Original JSON | Исходный JSON |
| code.output | Output | Вывод |
| code.running | Running… | Выполняется… |
| code.source | Code | Код |
| column.input | Input | Ввод |
| column.model | Model | Модель |
| column.output | Output | Вывод |
| column.think | Think | Рассуждение |
| column.time | Time | Время |
| column.tools | Tools | Инструменты |
| details.assistantMessage | Assistant Message | Сообщение ассистента |
| details.close | Close details | Закрыть сведения |
| details.compacted | Compacted | Сжато |
| details.error | Error | Ошибка |
| details.event | Event details | Сведения о событии |
| details.failure.auth | API key is invalid | Неверный ключ API |
| details.hierarchy | Hierarchy | Иерархия |
| details.lastAttemptError | Last attempt error | Ошибка последней попытки |
| details.model | Model | Модель |
| details.provider | Provider | Провайдер |
| details.purpose | Purpose | Назначение |
| details.resize | Resize event details | Изменить размер сведений о событии |
| details.resizeTitle | Drag to resize. Double-click to reset. | Перетащите, чтобы изменить размер. Двойной щёлчок сбрасывает. |
| details.result | Result | Результат |
| details.retry | Retry | Повторить |
| details.retryDelay | Retry delay | Задержка повтора |
| details.source | Source | Источник |
| details.status | Status | Статус |
| details.subtoolCalls | Subtool calls | Вызовы подынструментов |
| details.toolCall | Tool Call | Вызов инструмента |
| details.toolCalls | Tool calls | Вызовы инструментов |
| group.compaction | Compaction {seq} | Сжатие {seq} |
| group.message | Message | Сообщение |
| group.step | Step {step} | Шаг {step} |
| history.clickToLoadEarlier | Click to load earlier history | Нажмите, чтобы загрузить более раннюю историю |
| history.loadEarlier | Load earlier history | Загрузить более раннюю историю |
| history.loadingEarlier | Loading earlier history… | Загрузка более ранней истории… |
| history.loadingEarlierAria | Loading earlier history… | Загрузка более ранней истории… |
| history.loadingTrajectory | Loading trajectory… | Загрузка траектории… |
| kind.assistant | ASSISTANT | АССИСТЕНТ |
| kind.compacted | COMPACTED | СЖАТО |
| kind.context | CONTEXT | КОНТЕКСТ |
| kind.message | Message | Сообщение |
| kind.sub | Sub | Суб |
| kind.subtool | SUBTOOL | ПОДЫНСТРУМЕНТ |
| kind.system | SYSTEM | СИСТЕМА |
| kind.tool | TOOL | ИНСТРУМЕНТ |
| kind.user | USER | ПОЛЬЗОВАТЕЛЬ |
| layout.compacted | Context compacted | Контекст сжат |
| layout.compacting | Compacting context… | Сжатие контекста… |
| layout.compactionFailed | Compaction failed | Не удалось сжать контекст |
| layout.compactionInterrupted | Compaction was interrupted before completion. | Сжатие было прервано до завершения. |
| layout.fileAttachments | Files ×{count} | Файлы ×{count} |
| layout.imageCount | Images ×{count} | Изображения ×{count} |
| layout.initialSystemPrompt | Initial System Prompt | Исходный системный промпт |
| layout.systemPromptAndToolsUpdated | System Prompt and Tools Updated | Системный промпт и инструменты обновлены |
| layout.systemPromptUpdated | System Prompt Updated | Системный промпт обновлён |
| layout.toolAdded | Tool added: {name} | Добавлен инструмент: {name} |
| layout.toolCallOnly | Tool call only | Только вызов инструмента |
| layout.toolRemoved | Tool removed: {name} | Удалён инструмент: {name} |
| layout.toolUpdateNotice | Tools updated | Инструменты обновлены |
| layout.toolsAdded | Added: {names} | Добавлено: {names} |
| layout.toolsAddedCount | {count} added | Добавлено: {count} |
| layout.toolsChanged | {added} added, {removed} removed | Добавлено: {added}, удалено: {removed} |
| layout.toolsRemoved | Removed: {names} | Удалено: {names} |
| layout.toolsRemovedCount | {count} removed | Удалено: {count} |
| layout.toolsUpdated | Tools Updated | Инструменты обновлены |
| options.json | Request options JSON | JSON параметров запроса |
| options.notRecorded | Options not recorded | Параметры не записаны |
| record.json | JSON | JSON |
| record.namedParametersJson | {name} parameters JSON | JSON параметров {name} |
| record.noContent | No content | Нет содержимого |
| record.noOutput | No output | Нет вывода |
| record.noPayload | No payload captured | Данные не записаны |
| record.noResult | No result captured | Результат не записан |
| record.outputJson | Result JSON | JSON результата |
| record.parameters | Parameters | Параметры |
| record.parametersJson | parameters JSON | JSON параметров |
| record.payloadJson | Payload JSON | JSON данных |
| record.resultJson | Result JSON | JSON результата |
| record.schemaUnavailable | Schema unavailable | Схема недоступна |
| record.systemPrompt | System Prompt | Системный промпт |
| record.systemPromptMissing | No system prompt in this request | В этом запросе нет системного промпта |
| record.thinking | Thinking | Рассуждение |
| record.toolCallOnly | (tool call only) | (только вызов инструмента) |
| record.tools | Tools | Инструменты |
| record.toolsMissing | No tools in this request | В этом запросе нет инструментов |
| record.wrapLines | Wrap lines | Переносить строки |
| request.collapsedAssistant | assistant | ассистент |
| request.collapsedSummary | Collapsed {kind} summary, {summary} | Свёрнутая сводка {kind}, {summary} |
| request.collapsedTurn | turn | ход |
| request.compaction | Compaction · {section} | Сжатие · {section} |
| request.compactionPurpose | Compaction | Сжатие |
| request.label | Request #{request} | Запрос #{request} |
| request.labelCompaction | Request #{request} · Compaction | Запрос #{request} · Сжатие |
| request.noContent | no content | нет содержимого |
| request.retryProgress | {retry} of {maximum} | {retry} из {maximum} |
| request.rowAria | {request}{kind}, {content} | {request}{kind}, {content} |
| request.rowAriaCompaction | Request {request}, compaction | Запрос {request}, сжатие |
| request.rowPrefix | Request {request},  | Запрос {request},  |
| section.betweenTurns | Between turns | Между ходами |
| source.goal | Goal | Цель |
| source.goalRound | Goal · Round {round} | Цель · раунд {round} |
| source.messageJson | Message source JSON | JSON источника сообщения |
| source.notRecorded | Source not recorded | Источник не записан |
| source.plugin | Plugin | Плагин |
| source.pluginNamed | Plugin · {plugin} | Плагин · {plugin} |
| source.unknown | Unknown | Неизвестно |
| source.user | User | Пользователь |
| status.completed | Completed | Завершено |
| status.failed | Failed | Ошибка |
| status.pending | Pending | Ожидание |
| summary.steps.one | {count} step | {count} шаг |
| summary.steps.other | {count} steps | {count} шагов |
| summary.toolCalls.one | {count} tool call | {count} вызов инструмента |
| summary.toolCalls.other | {count} tool calls | {count} вызовов инструментов |
| tab.diff | Diff | Изменения |
| tab.options | Options | Параметры |
| tab.payload | Payload | Данные |
| tab.preview | Preview | Просмотр |
| tab.raw | Raw | Сырые данные |
| tab.rawOutput | Raw Output | Сырой вывод |
| tab.result | Result | Результат |
| tab.schema | Schema | Схема |
| tab.source | Source | Источник |
| tab.summary | Summary | Сводка |
| tab.systemPrompt | System Prompt | Системный промпт |
| tab.timing | Timing | Тайминги |
| tab.tools | Tools | Инструменты |
| tab.usage | Usage | Использование |
| timeline.aria | Trajectory timeline | Шкала траектории |
| timeline.noTimingData | No timing data | Нет данных о времени |
| timeline.overviewAria | Timeline overview; drag horizontally to focus events | Обзор шкалы; перетаскивайте по горизонтали, чтобы выбрать события |
| timeline.started | Started {time} | Начало {time} |
| timeline.total | Total {duration} | Всего {duration} |
| timeline.ttftDecoding | TTFT {ttft} · Decoding {decoding} | TTFT {ttft} · декодирование {decoding} |
| timing.duration | Duration | Длительность |
| timing.durationTooShort | Duration too short | Слишком малая длительность |
| timing.firstTokenUnavailable | First token unavailable | Первый токен недоступен |
| timing.generation | Generation | Генерация |
| timing.notAvailable | Not available | Недоступно |
| timing.notRecorded | Not recorded | Не записано |
| timing.outputTokensUnavailable | Output tokens unavailable | Токены вывода недоступны |
| timing.request | Request Timing | Время запроса |
| timing.sessionTimestamps | Session timestamps | Метки времени сессии |
| timing.sessionTimestampsRunning | Session timestamps (running) | Метки времени сессии (выполняется) |
| timing.showLocalTime | Show local time | Показывать местное время |
| timing.showUnixTimestamp | Show Unix timestamp | Показывать метку Unix |
| timing.source | Timing source | Источник времени |
| timing.started | Started | Начало |
| timing.stepStartUnavailable | Step start unavailable | Начало шага недоступно |
| timing.throughput | Throughput | Пропускная способность |
| timing.totalDuration | Total duration | Общая длительность |
| timing.ttft | TTFT | TTFT |
| timing.usageUnavailable | Usage unavailable | Данные об использовании недоступны |
| toolbar.actualTime | Actual time | Фактическое время |
| toolbar.aria | Trajectory toolbar | Панель траектории |
| toolbar.calls | Calls | Вызовы |
| toolbar.collapseCalls | Collapse calls | Свернуть вызовы |
| toolbar.collapseTurns | Collapse turns | Свернуть ходы |
| toolbar.duration | Duration | Длительность |
| toolbar.expandCalls | Expand calls | Развернуть вызовы |
| toolbar.expandTurns | Expand turns | Развернуть ходы |
| toolbar.search | Search trajectory | Поиск по траектории |
| toolbar.searchPlaceholder | Search | Поиск |
| toolbar.turns | Turns | Ходы |
| toolbar.useActualDuration | Use actual duration | Использовать фактическую длительность |
| toolbar.useEqualWidth | Use equal-width operations | Использовать одинаковую ширину операций |
| turn.label | Turn {turn} | Ход {turn} |
| unit.milliseconds | {value} ms | {value} мс |
| unit.seconds | {value} s | {value} с |
| unit.tokens | {value} tok | {value} ток. |
| unit.tokensPerSecond | {value} tok/s | {value} ток./с |
| usage.cacheCreated | Cache created | Создано в кеше |
| usage.cached | Cached | Из кеша |
| usage.content | Content | Содержимое |
| usage.input | Input | Ввод |
| usage.notReported | Usage not reported | Использование не сообщается |
| usage.other | Other | Другое |
| usage.output | Output | Вывод |
| usage.reasoning | Reasoning | Рассуждение |
| usage.sessionCumulative | Session cumulative | Всего за сессию |
| usage.thisRequest | This request | Этот запрос |
| usage.tokens | Tokens | Токены |
| view.trajectory | Trajectory | Траектория |

## voice-input

| Ключ | English (original) | Русский |
|---|---|---|
| auto | Detect automatically | Определять автоматически |
| cancel | Cancel | Отмена |
| cancelPrepare | Cancel preparation | Отменить подготовку |
| cancelled | Voice input cancelled. | Голосовой ввод отменён. |
| cloud | Audio will be sent to the selected cloud service. | Аудио будет отправлено в выбранный облачный сервис. |
| cloudReady | Cloud speech recognition is ready. | Облачное распознавание речи готово. |
| conflict | Your draft changed. The transcript is preserved and can be inserted at the current cursor. | Ваш черновик изменился. Транскрипт сохранён, его можно вставить в текущую позицию курсора. |
| deviceMissing | Microphone unavailable. Choose another input device. | Микрофон недоступен. Выберите другое устройство ввода. |
| deviceUnavailable | Unavailable | Недоступно |
| dictate | Dictate | Диктовка |
| discard | Discard transcript | Удалить транскрипт |
| download.certificate | Cannot download {resource}: certificate verification failed. | Не удалось скачать {resource}: проверка сертификата не пройдена. |
| download.dns | Cannot download {resource}: the download address could not be resolved. | Не удалось скачать {resource}: не удалось определить адрес загрузки. |
| download.http | Cannot download {resource}: the download service returned HTTP {status}. | Не удалось скачать {resource}: служба загрузки вернула HTTP {status}. |
| download.integrity | The download of {resource} is incomplete or failed verification. | Загрузка {resource} не завершена или не прошла проверку. |
| download.network | Cannot download {resource}: connection to the download service failed. | Не удалось скачать {resource}: не удалось подключиться к службе загрузки. |
| download.storage | Cannot save {resource}: insufficient disk space or write permission. | Не удалось сохранить {resource}: недостаточно места на диске или нет прав на запись. |
| download.timeout | The download of {resource} timed out. | Время загрузки {resource} истекло. |
| download.unknown | Could not prepare {resource}. | Не удалось подготовить {resource}. |
| downloadAdvice.certificate | Check the system clock, trusted certificates and proxy settings on the machine running DSH, then retry. | Проверьте системные часы, доверенные сертификаты и настройки прокси на машине с DSH, затем повторите. |
| downloadAdvice.dns | Check DNS and proxy settings on the machine running DSH. Confirm that it can resolve the download source domain, then retry. | Проверьте настройки DNS и прокси на машине с DSH. Убедитесь, что она может разрешить домен источника загрузки, и повторите. |
| downloadAdvice.http | Confirm that the download address is available and the proxy can reach the download service, or retry later. | Убедитесь, что адрес загрузки доступен и прокси может подключиться к службе загрузки, или повторите позже. |
| downloadAdvice.integrity | Retry the download. Other completed and verified files are retained. | Повторите загрузку. Остальные завершённые и проверенные файлы сохранены. |
| downloadAdvice.network | Check that the machine running DSH can reach the download source and its model download services. Configure a proxy on that machine if needed, then retry. | Убедитесь, что машина с DSH может подключиться к источнику загрузки и его службам загрузки моделей. При необходимости настройте прокси на этой машине и повторите. |
| downloadAdvice.storage | Check available disk space and write permission for the model directory on the machine running DSH, then retry. | Проверьте свободное место на диске и права на запись в каталог моделей на машине с DSH, затем повторите. |
| downloadAdvice.timeout | Check the network or proxy connection on the machine running DSH, then retry later. Verified downloaded files are retained. | Проверьте сетевое подключение или прокси на машине с DSH и повторите позже. Проверенные загруженные файлы сохранены. |
| downloadAdvice.unknown | Check the network, disk space and model directory permissions on the machine running DSH, then retry. | Проверьте сеть, свободное место на диске и права на каталог моделей на машине с DSH, затем повторите. |
| downloadBytes | Download: {completed} / {total} MB, {percent}% | Загрузка: {completed} / {total} МБ, {percent}% |
| downloadCode | Error code: {code} | Код ошибки: {code} |
| downloadProgress | Download progress | Ход загрузки |
| downloadSource | Download source: {source} | Источник загрузки: {source} |
| downloadUnknown | Downloaded {completed} MB | Загружено {completed} МБ |
| elapsed | Waiting {seconds} seconds | Ожидание {seconds} с |
| empty | No speech recognized | Речь не распознана |
| en | English | Английский |
| failed | Speech recognition failed: {message} | Не удалось распознать речь: {message} |
| inputDevice | Input device | Устройство ввода |
| inputLevel | Microphone input level | Уровень сигнала микрофона |
| insert | Insert text | Вставить текст |
| interrupted | Recording was interrupted. Please try again. | Запись прервана. Попробуйте ещё раз. |
| ja | Japanese | Японский |
| ko | Korean | Корейский |
| language | Recognition language | Язык распознавания |
| loading | Loading recognition services… | Загрузка служб распознавания… |
| local | Audio is recognized on the machine running DSH. If models need downloading, that machine must be able to reach the selected source and its file services. Configure a proxy on that machine if needed. | Аудио распознаётся на машине с DSH. Если модели нужно скачать, эта машина должна иметь доступ к выбранному источнику и его файловым службам. При необходимости настройте прокси на этой машине. |
| permission | Microphone access is disabled. Allow it in browser and system settings. | Доступ к микрофону отключён. Разрешите его в настройках браузера и системы. |
| preparation.cancelled | Preparation cancelled. Completed downloads are retained. | Подготовка отменена. Завершённые загрузки сохранены. |
| preparation.cancelling | Cancelling preparation… | Отмена подготовки… |
| preparation.checking | Checking local resources… | Проверка локальных ресурсов… |
| preparation.loading | Loading {name}… | Загрузка {name}… |
| preparation.ready | Local speech recognition is ready. | Локальное распознавание речи готово. |
| preparation.standby | Local resources are prepared. Recording wakes the recognizer. | Локальные ресурсы подготовлены. Запись включает распознаватель. |
| preparation.unprepared | First use downloads the local recognition models. | При первом использовании скачиваются локальные модели распознавания. |
| preparation.waking | Waking local speech recognition… | Запуск локального распознавания речи… |
| preparationFailed | Preparation failed: {message} | Подготовка не удалась: {message} |
| preparationSteps | Preparation steps | Этапы подготовки |
| prepare | Download and prepare | Скачать и подготовить |
| provider | Recognition service | Служба распознавания |
| reconnecting | Connecting to speech recognition… | Подключение к распознаванию речи… |
| recording | Recording… | Запись… |
| requesting | Allow microphone access to continue… | Разрешите доступ к микрофону, чтобы продолжить… |
| retryPrepare | Retry preparation | Повторить подготовку |
| retryRecording | Record again | Записать снова |
| setup.disk | Disk space | Место на диске |
| setup.diskValue | Allow about {gb} GB for models, runtime, and download caches | Около {gb} ГБ для моделей, среды выполнения и кешей загрузки |
| setup.estimateNote | These are estimates; slow networks may take longer. Downloads are reused; idle models release memory by default. | Это оценки; при медленной сети может занять больше времени. Загрузки используются повторно; неактивные модели по умолчанию освобождают память. |
| setup.local | Local models will be downloaded to the machine running DSH. No Python or compiler is required. | Локальные модели будут скачаны на машину с DSH. Python или компилятор не требуются. |
| setup.memory | Memory | Память |
| setup.memoryValue | About {gb} GB with the model loaded; recognition may use more | Около {gb} ГБ с загруженной моделью; при распознавании может потребоваться больше |
| setup.time | First setup | Первая настройка |
| setup.timeValue | Allow roughly {min}–{max} minutes, depending on the network and machine | Примерно {min}–{max} минут в зависимости от сети и машины |
| setupPrompt.body | Voice input is enabled. First use requires downloading and preparing local recognition models. Open the plugin details to review disk space, memory and time estimates before starting setup. | Голосовой ввод включён. При первом использовании нужно скачать и подготовить локальные модели распознавания. Откройте сведения о плагине, чтобы оценить место на диске, память и время перед началом настройки. |
| setupPrompt.details | Open voice plugin settings | Открыть настройки плагина голосового ввода |
| setupPrompt.later | Later | Позже |
| setupPrompt.open | Go to setup | Перейти к настройке |
| setupPrompt.title | Set up voice input before recording | Настройте голосовой ввод перед записью |
| setupPrompt.trigger | Open voice input setup | Открыть настройку голосового ввода |
| setupPrompt.unavailableBody | Open the voice plugin details to check recognition status, preparation progress, or errors. | Откройте сведения о плагине голосового ввода, чтобы проверить состояние распознавания, ход подготовки или ошибки. |
| setupPrompt.unavailableTitle | Speech recognition is not ready | Распознавание речи не готово |
| short.downloading | Downloading | Загрузка |
| short.failed | Setup failed | Настройка не удалась |
| sourceAuto | Automatic (recommended) | Автоматически (рекомендуется) |
| sourceAutoHelp | Prefer the first responding source and try another if a download fails. | Использовать первый ответивший источник и пробовать другой, если загрузка не удалась. |
| sourceChoice | Model download source | Источник загрузки моделей |
| sourceHuggingFace | Hugging Face | Hugging Face |
| sourceManualHelp | Download only from the selected source. Verified downloaded files are reused. | Скачивать только из выбранного источника. Проверенные загруженные файлы используются повторно. |
| sourceMirror | HF-Mirror (China mirror) | HF-Mirror (зеркало для Китая) |
| start | Start recording | Начать запись |
| step.check | Check local resources | Проверка локальных ресурсов |
| step.load | Load {name} | Загрузка {name} |
| step.model | Prepare recognition model | Подготовка модели распознавания |
| step.vad | Prepare voice detection model | Подготовка модели обнаружения голоса |
| step.verify | Verify model files | Проверка файлов модели |
| stepStatus.cancelled | Cancelled | Отменено |
| stepStatus.complete | Completed | Завершено |
| stepStatus.failed | Failed | Ошибка |
| stepStatus.pending | Not started | Не начато |
| stepStatus.running | In progress | Выполняется |
| stop | Stop and transcribe | Остановить и распознать |
| systemMicrophone | System default | Системное по умолчанию |
| systemMicrophoneNamed | System default ({name}) | Системное по умолчанию ({name}) |
| tooLarge | The recording exceeds the service limit. Try a shorter recording. | Запись превышает ограничение сервиса. Попробуйте более короткую запись. |
| transcribingShort | Transcribing… | Распознавание… |
| unavailable | This browser cannot record audio. Use a browser with microphone support. | Этот браузер не может записывать аудио. Используйте браузер с поддержкой микрофона. |
| unnamedMicrophone | Microphone {number} | Микрофон {number} |
| unnamedSelectedMicrophone | Microphone | Микрофон |
| wakingShort | Waking… | Запуск… |
| yue | Cantonese | Кантонский |
| zh | Chinese | Китайский |

## workflowRun

| Ключ | English (original) | Русский |
|---|---|---|
| member.empty | Empty member name | Пустое имя участника |
| member.open | Open {name} | Открыть {name} |
| phase.empty | Empty phase name | Пустое имя фазы |
| phase.unassigned | Unphased | Без фазы |
| run.empty | No members started | Участники не запущены |
| run.members.one | {count} member | {count} участник |
| run.members.other | {count} members | {count} участников |
| run.title | {name} | {name} |
| status.cancelled | Cancelled | Отменено |
| status.completed | Completed | Завершено |
| status.failed | Failed | Ошибка |
| status.interrupted | Interrupted | Прервано |
| status.running | Running | Выполняется |
| statusCount.cancelled | Cancelled {count} | Отменено: {count} |
| statusCount.completed | Completed {count} | Завершено: {count} |
| statusCount.failed | Failed {count} | Ошибок: {count} |
| statusCount.interrupted | Interrupted {count} | Прервано: {count} |
| statusCount.running | Running {count} | Выполняется: {count} |

## workspace

| Ключ | English (original) | Русский |
|---|---|---|
| actions.archive | Archive | Архивировать |
| actions.newSession | New session | Новая сессия |
| actions.newSession.aria | New session in {name} | Новая сессия в {name} |
| actions.pin | Pin | Закрепить |
| actions.session.aria | Session actions for {name} | Действия с сессией {name} |
| actions.unarchive | Unarchive | Разархивировать |
| actions.unpin | Unpin | Открепить |
| actions.workspace.aria | Workspace actions for {name} | Действия с рабочей областью {name} |
| archive.confirm.action | Stop and archive | Остановить и архивировать |
| archive.confirm.activity | Work that will be stopped | Работа, которая будет остановлена |
| archive.confirm.desc | “{title}” still has work in progress. Archiving stops it first; you can restore the session later from the “All conversations (show archived)” filter in the sidebar, and the stopped work will not resume on its own. | В «{title}» ещё есть незавершённая работа. При архивировании она будет остановлена; позже сессию можно восстановить через фильтр «Все беседы (показывать архив)» на боковой панели, а остановленная работа не возобновится сама. |
| archive.confirm.jobs.one | {n} background job: {names} | {n} фоновое задание: {names} |
| archive.confirm.jobs.other | {n} background jobs: {names} | {n} фоновых заданий: {names} |
| archive.confirm.listSeparator | ,  | ,  |
| archive.confirm.other.one | {n} other item of work ({kind}) | {n} другая единица работы ({kind}) |
| archive.confirm.other.other | {n} other items of work ({kind}) | {n} других единиц работы ({kind}) |
| archive.confirm.pending | Stopping and archiving… | Остановка и архивирование… |
| archive.confirm.schedules.one | {n} scheduled reminder: {names} | {n} запланированное напоминание: {names} |
| archive.confirm.schedules.other | {n} scheduled reminders: {names} | {n} запланированных напоминаний: {names} |
| archive.confirm.subagents.one | {n} running subagent: {names} | {n} работающий субагент: {names} |
| archive.confirm.subagents.other | {n} running subagents: {names} | {n} работающих субагентов: {names} |
| archive.confirm.title | Stop and archive this session? | Остановить и архивировать эту сессию? |
| archive.confirm.turn | The turn in progress | Текущий ход |
| conflict.named | A workspace named “{name}” already exists. | Рабочая область с именем «{name}» уже существует. |
| date.ymd | {y}-{m}-{d} | {y}-{m}-{d} |
| defaultWorkspace.failed | Unable to create default workspace. Use Choose workspace to select a folder. | Не удалось создать рабочую область по умолчанию. Выберите папку через «Выбрать рабочую область». |
| delete.desc | This removes “{name}” from the workspace list. The folder and session logs will be kept. Its sessions will appear under Ungrouped. | «{name}» будет удалена из списка рабочих областей. Папка и журналы сессий сохранятся. Её сессии появятся в группе «Без группы». |
| delete.pending | Deleting workspace… | Удаление рабочей области… |
| delete.workspace | Delete workspace | Удалить рабочую область |
| draft.initializationFailed | Could not fill the draft. Please try again shortly. | Не удалось заполнить черновик. Попробуйте ещё раз чуть позже. |
| draft.workspaceRequired | Choose a workspace first. | Сначала выберите рабочую область. |
| empty.noMatches | No matches | Нет совпадений |
| empty.none | No sessions yet | Пока нет сессий |
| empty.noneArchived | No archived sessions yet | Пока нет архивных сессий |
| empty.viewOthers | View other sessions | Показать другие сессии |
| field.sessionName | Session name | Имя сессии |
| field.workspaceName | Workspace name | Имя рабочей области |
| filterBy.label | Filter sessions | Фильтр сессий |
| folderError.retry | Choose again | Выбрать снова |
| folderError.title | Couldn’t open folder | Не удалось открыть папку |
| group.ungrouped | Ungrouped | Без группы |
| groupBy.flat | In one list | Одним списком |
| groupBy.label | Group by | Группировка |
| groupBy.workspace | WorkSpace | Рабочая область |
| groupBy.workspaceTree | Workspace Tree | Дерево рабочих областей |
| hover.copied | Copied | Скопировано |
| hover.created | Created {time} | Создано {time} |
| menu.addWorkspace | Add workspace… | Добавить рабочую область… |
| menu.archiveSession | Archive session | Архивировать сессию |
| menu.fork | Fork session | Ответвить сессию |
| menu.pinSession | Pin session | Закрепить сессию |
| menu.sessionId | Copy Session ID | Скопировать ID сессии |
| menu.unarchiveSession | Unarchive session | Разархивировать сессию |
| menu.unpinSession | Unpin session | Открепить сессию |
| orderBy.label | Order by | Сортировка |
| orderBy.manual | Manual | Вручную |
| orderBy.updated | Last updated | Последнее обновление |
| picker.loading | Loading workspaces… | Загрузка рабочих областей… |
| rename | Rename | Переименовать |
| rename.session.title | Rename session | Переименовать сессию |
| rename.workspace.title | Rename workspace | Переименовать рабочую область |
| row.archived | Archived | В архиве |
| row.pinned | Pinned | Закреплено |
| search.clear | Clear search | Очистить поиск |
| search.hasMore | Showing the first {n} results. Narrow your search. | Показаны первые {n} результатов. Уточните поиск. |
| search.noMatches | No matching sessions | Нет подходящих сессий |
| search.pending | Searching session history… | Поиск по истории сессий… |
| search.placeholder | Search session names | Поиск по именам сессий |
| search.results.aria | Search results | Результаты поиска |
| search.sessions.aria | Search sessions | Поиск сессий |
| section.sessions | Sessions | Сессии |
| section.workspaces | Workspaces | Рабочие области |
| session.new | New Session | Новая сессия |
| session.untitled | Untitled | Без названия |
| sessions.collapse | Show less | Свернуть |
| sessions.count.one | {n} session | {n} сессия |
| sessions.count.other | {n} sessions | {n} сессий |
| sessions.expand | Show {n} more sessions | Показать ещё {n} сессий |
| shortcut.directoryBusy | Selecting or adding a workspace | Выбор или добавление рабочей области |
| shortcut.forkFailed | Could not fork the session. Try again. | Не удалось ответвить сессию. Попробуйте ещё раз. |
| shortcut.noCompletedTurn | This session has no completed turn | В этой сессии нет завершённых ходов |
| shortcut.noPicker | Directory picker unavailable | Выбор папки недоступен |
| shortcut.noSession | Select a session first | Сначала выберите сессию |
| status.compact.answer | Answer | Ответ |
| status.compact.approval | Approval | Подтверждение |
| status.compact.planReview | Plan review | Проверка плана |
| status.completed | Completed | Завершено |
| status.idle | Idle | Неактивна |
| status.planReview | Plan awaiting review | План ждёт проверки |
| status.running | Running | Выполняется |
| status.subagentsRunning.one | {n} subagent running | {n} субагент работает |
| status.subagentsRunning.other | {n} subagents running | {n} субагентов работают |
| status.waitingAnswer | Waiting for answer | Ожидание ответа |
| status.waitingApproval | Waiting for approval | Ожидание подтверждения |
| time.ago | {t} ago | {t} назад |
| time.days | {n}d | {n} дн. |
| time.hours | {n}h | {n} ч |
| time.minutes | {n}min | {n} мин |
| time.months | {n}mo | {n} мес. |
| time.now | now | сейчас |
| time.years | {n}y | {n} г. |
| toast.archived | Session archived. You can  | Сессия архивирована. Вы можете  |
| toast.archivedFilter | filter archived sessions | отфильтровать архивные сессии |
| toast.archivedNotOpenable | Archived sessions cannot be opened. Unarchive it to view. | Архивные сессии нельзя открыть. Разархивируйте её, чтобы просмотреть. |
| toast.archivedOr |  or  |  или  |
| toast.archivedUndo | undo | отменить |
| toast.createFailed | New session failed: {message} | Не удалось создать сессию: {message} |
| toast.forkRequiresOpen | Open the original session to complete migration before creating a branch. | Откройте исходную сессию, чтобы завершить миграцию перед созданием ответвления. |
| toast.openForkSource | Open original session | Открыть исходную сессию |
| toast.pinFailed | Pin failed. Try again later. | Не удалось закрепить. Повторите позже. |
| toast.sessionIdCopied | Session ID copied | ID сессии скопирован |
| toast.sessionIdCopyFailed | Copy failed. Try again. | Не удалось скопировать. Попробуйте ещё раз. |
| toast.stoppedAndArchived | Session stopped and archived. You can  | Сессия остановлена и архивирована. Вы можете  |
| toast.unpinFailed | Unpin failed. Try again later. | Не удалось открепить. Повторите позже. |
| viewOptions.hideArchived | Hide archived | Скрыть архивные |
| viewOptions.label | View options | Параметры вида |
| viewOptions.onlyArchived | Archived only | Только архивные |
| viewOptions.showArchived | All conversations (show archived) | Все беседы (показывать архив) |
| workspace.add | Add workspace | Добавить рабочую область |

## community-market

| Ключ | English (original) | Русский |
|---|---|---|
| tab | Plugin Market | Магазин плагинов |
| title | Community Plugin Market | Магазин плагинов сообщества |
| subtitle | Discover DeepSeek Harness plugins from sources you choose | Находите плагины DeepSeek Harness из выбранных вами источников |
| close | Close | Закрыть |
| closeMarket | Close Plugin Market | Закрыть магазин плагинов |
| discover | Discover | Обзор |
| installable | Installable | Доступные для установки |
| installed | Installed | Установленные |
| sources | Sources | Источники |
| sourceSelection | Choose plugin source | Выберите источник плагинов |
| currentSource | Current source | Текущий источник |
| noSourceSelected | No source selected | Источник не выбран |
| search | Search plugins | Поиск плагинов |
| searchAction | Search | Искать |
| categories | Categories | Категории |
| refresh | Refresh | Обновить |
| loading | Loading plugin catalog... | Загрузка каталога плагинов… |
| emptyTitle | No source selected | Источник не выбран |
| emptyBody | You can add multiple sources, but only one is used at a time. | Можно добавить несколько источников, но одновременно используется только один. |
| chooseSources | Manage sources | Управление источниками |
| noResults | No matching plugins | Нет подходящих плагинов |
| loadMore | Load more | Показать ещё |
| loadingMore | Loading more... | Загрузка… |
| loadMoreError | More results could not be loaded. Results already shown are unaffected. | Не удалось загрузить остальные результаты. Уже показанные результаты не пострадали. |
| partialFailure | The current source could not be refreshed. Showing the last successfully loaded results. | Не удалось обновить текущий источник. Показаны последние успешно загруженные результаты. |
| stale | Previous results | Предыдущие результаты |
| source | Source | Источник |
| repository | Open source repository | Открыть репозиторий |
| details | Plugin details | Сведения о плагине |
| readOnly | This plugin cannot currently be installed automatically in Desktop. You can still review its details and source repository. | Этот плагин сейчас нельзя установить автоматически в Desktop. Вы можете изучить его сведения и репозиторий. |
| checkingInstallMethod | Checking available installation methods... | Проверка доступных способов установки… |
| manualInstallTitle | Manual installation | Ручная установка |
| manualInstallBody | DSH Desktop generated this command from the plugin information, so it may differ from the repository instructions. Review the source first, then copy it into DSH Terminal. | DSH Desktop сгенерировал эту команду из данных плагина, поэтому она может отличаться от инструкций репозитория. Сначала изучите исходники, затем скопируйте команду в DSH Terminal. |
| installCommand | Install command | Команда установки |
| manualNotVerified | This display-only command has not passed the complete package verification required for managed installation. Verify the source, contents, and compatibility yourself. | Эта команда показана только для справки и не проходила полную проверку пакета, необходимую для управляемой установки. Проверьте исходники, содержимое и совместимость самостоятельно. |
| mutableGithubWarning | This GitHub target follows the repository’s current HEAD. Its contents can change and are not pinned to the code shown now. | Эта цель GitHub отслеживает текущий HEAD репозитория. Его содержимое может измениться и не привязано к показанному сейчас коду. |
| openTerminal | Open DSH Terminal | Открыть DSH Terminal |
| openingTerminal | Opening terminal... | Открытие терминала… |
| desktopActionUnavailable | This desktop action is not available in the current environment. | Это действие Desktop недоступно в текущем окружении. |
| terminalError | DSH Terminal could not be opened. Open it from the application menu, then copy the command manually. | Не удалось открыть DSH Terminal. Откройте его из меню приложения и скопируйте команду вручную. |
| restartError | DSH Desktop could not be restarted. Restart it manually when convenient. | Не удалось перезапустить DSH Desktop. Перезапустите его вручную, когда будет удобно. |
| installableBody | This view shows plugins pre-screened from the current source’s complete catalog. DSH Desktop verifies the version, source, and compatibility again after selection. | Здесь показаны плагины, предварительно отобранные из полного каталога текущего источника. После выбора DSH Desktop повторно проверит версию, источник и совместимость. |
| installedBody | Plugins in the active profile appear here. Plugins installed by Plugin Market can be uninstalled; mutable plugins can be disabled and enabled again later. | Здесь отображаются плагины активного профиля. Плагины, установленные через магазин, можно удалить; изменяемые плагины можно отключать и снова включать. |
| install | Install | Установить |
| uninstall | Uninstall | Удалить |
| disable | Disable | Отключить |
| enable | Enable | Включить |
| managedPlugin | Installed by Plugin Market | Установлено магазином плагинов |
| externalPlugin | Installed another way | Установлено другим способом |
| immutablePlugin | DSH core component | Компонент ядра DSH |
| activePlugin | Enabled | Включён |
| disabledPlugin | Set to disabled | Отключён |
| noInstallable | No automatically installable plugins in the current source | В текущем источнике нет плагинов для автоматической установки |
| noInstallableBody | Other plugins remain available under Discover. | Другие плагины доступны в разделе «Обзор». |
| scanningInstallable | Checking installable plugins... | Проверка доступных для установки плагинов… |
| installableError | Installable plugins are temporarily unavailable | Плагины для установки временно недоступны |
| rescanInstallable | Check again | Проверить снова |
| scannedAt | Catalog updated | Каталог обновлён |
| cacheExpiresAt | Cache expires | Кэш истекает |
| providerRevision | Provider revision | Версия провайдера |
| freshScan | Fresh data | Свежие данные |
| cachedScan | Cached data | Данные из кэша |
| noInstalled | No manageable plugins in the current profile | В текущем профиле нет управляемых плагинов |
| noInstalledBody | There are no plugins to show in the active profile. | В активном профиле нет плагинов для отображения. |
| loadingInstallations | Reading plugins in the active profile... | Чтение плагинов активного профиля… |
| desktopRequiredTitle | DSH Desktop is required | Требуется DSH Desktop |
| desktopUnavailable | Install, uninstall, disable, and enable are available only in DSH Desktop. You can still browse the catalog. | Установка, удаление, отключение и включение доступны только в DSH Desktop. Каталог можно просматривать. |
| installationsError | The plugin inventory for the current profile is temporarily unavailable | Список плагинов текущего профиля временно недоступен |
| previewError | The exact plugin target could not be verified and may not be a standard plugin. | Не удалось подтвердить точную цель плагина; возможно, это нестандартный плагин. |
| verificationDetails | View details | Подробнее |
| uninstallPreviewError | This plugin’s Plugin Market install record could not be verified. Refresh and try again. | Не удалось подтвердить запись установки этого плагина через магазин. Обновите и попробуйте снова. |
| disablePreviewError | The plugin bundle to disable could not be confirmed. Refresh and try again. | Не удалось определить бандл плагина для отключения. Обновите и попробуйте снова. |
| enablePreviewError | The plugin bundle to enable could not be confirmed. Refresh and try again. | Не удалось определить бандл плагина для включения. Обновите и попробуйте снова. |
| executeError | The operation result could not be confirmed. Refresh Installed before trying again to avoid repeating the operation. | Не удалось подтвердить результат операции. Обновите вкладку «Установленные» перед повторной попыткой, чтобы не выполнить её дважды. |
| plugin | Plugin | Плагин |
| package | npm package | пакет npm |
| exactVersion | Exact version | Точная версия |
| profile | Current profile | Текущий профиль |
| installedAt | Installed at | Установлен |
| previewExpires | Confirmation expires | Подтверждение истекает |
| confirmInstallTitle | Confirm plugin installation | Подтвердите установку плагина |
| confirmInstallBody | Review the npm package, version, and target profile verified by DSH Desktop. | Проверьте npm-пакет, версию и целевой профиль, подтверждённые DSH Desktop. |
| confirmUninstallTitle | Confirm plugin removal | Подтвердите удаление плагина |
| confirmUninstallBody | Only this plugin’s verified Plugin Market installation in the active profile will be removed. | Будет удалена только подтверждённая установка этого плагина через магазин в активном профиле. |
| confirmDisableTitle | Confirm external plugin disable | Подтвердите отключение стороннего плагина |
| confirmDisableBody | DSH Desktop will stop loading this plugin in the active profile without uninstalling its npm package. | DSH Desktop перестанет загружать этот плагин в активном профиле, не удаляя его npm-пакет. |
| confirmEnableTitle | Confirm plugin enable | Подтвердите включение плагина |
| confirmEnableBody | DSH Desktop will load this plugin in the active profile again. Its code will run after restart. | DSH Desktop снова загрузит этот плагин в активном профиле. Его код запустится после перезапуска. |
| confirmInstall | Confirm install | Подтвердить установку |
| confirmUninstall | Confirm uninstall | Подтвердить удаление |
| confirmDisable | Confirm disable | Подтвердить отключение |
| confirmEnable | Confirm enable | Подтвердить включение |
| installing | Installing... | Установка… |
| uninstalling | Uninstalling... | Удаление… |
| disabling | Disabling... | Отключение… |
| enabling | Enabling... | Включение… |
| operationWarning | Plugins run as local code with your user permissions. Install only plugins you trust. | Плагины выполняются как локальный код с вашими правами. Устанавливайте только те, которым доверяете. |
| operationRiskBeforeContact | Installing a plugin incorrectly, or installing an unverified plugin, may cause crashes or unexpected behavior. You can  | Неправильная установка плагина или установка непроверенного плагина может вызвать сбои или неожиданное поведение. Вы можете  |
| contactUs | contact us | связаться с нами |
| operationRiskAfterContact |  or the plugin developer. |  или с разработчиком плагина. |
| restartAfterOperation | Restart DSH Desktop after this operation for the change to take effect. | Перезапустите DSH Desktop после этой операции, чтобы изменения вступили в силу. |
| disableWarning | Disabling does not uninstall the npm package or isolate the plugin’s code. | Отключение не удаляет npm-пакет и не изолирует код плагина. |
| disableRecoveryWarning | If the plugin prevents DSH Desktop from reaching this page, use the manual recovery steps. | Если плагин не даёт DSH Desktop открыть эту страницу, воспользуйтесь инструкцией по ручному восстановлению. |
| enableWarning | After it is enabled, this plugin runs as local code with your user permissions. Enable only plugins you trust. | После включения плагин выполняется как локальный код с вашими правами. Включайте только те, которым доверяете. |
| disabledRestartRequired | This plugin is currently disabled and can be enabled again. | Этот плагин сейчас отключён и может быть снова включён. |
| installComplete | Plugin installed | Плагин установлен |
| uninstallComplete | Plugin uninstalled | Плагин удалён |
| disableComplete | Plugin set to disabled | Плагин отключён |
| enableComplete | Plugin set to enabled | Плагин включён |
| restartRequiredTitle | Restart DSH Desktop | Перезапустите DSH Desktop |
| restartRequiredBody | Restart DSH Desktop so the current profile loads its updated plugin state. | Перезапустите DSH Desktop, чтобы текущий профиль загрузил обновлённое состояние плагинов. |
| restartLater | Restart later | Перезапустить позже |
| restartNow | Restart now | Перезапустить сейчас |
| restarting | Restarting... | Перезапуск… |
| done | Done | Готово |
| builtIn | Built-in adapter | Встроенный адаптер |
| partner | Partner provider | Партнёрский провайдер |
| sourcePartnershipBefore | Besides adding a compatible custom source, you can  | Помимо добавления совместимого собственного источника, вы можете  |
| sourcePartnershipContact | contact us | связаться с нами |
| sourcePartnershipAfter |  to apply for inclusion as a built-in partner source. |  и подать заявку на включение во встроенные партнёрские источники. |
| sourcePartnershipGuide | Read the source integration guide | Прочитать руководство по интеграции источников |
| selectSource | Select this source | Выбрать этот источник |
| selectedSource | Current source | Текущий источник |
| add | Add | Добавить |
| remove | Remove source | Удалить источник |
| moveUp | Move source up | Переместить источник выше |
| moveDown | Move source down | Переместить источник ниже |
| standardSource | Source manifest URL | URL манифеста источника |
| standardAdapter | Standard protocol | Стандартный протокол |
| notChecked | Not checked yet | Ещё не проверялся |
| available | Available on last check | Доступен при последней проверке |
| lastStale | Using stale data | Используются устаревшие данные |
| unavailable | Unavailable on last check | Недоступен при последней проверке |
| manifestPlaceholder | https://example.com/catalog-source.json | https://example.com/catalog-source.json |
| addStandard | Add standard source | Добавить стандартный источник |
| cancel | Cancel | Отмена |
| confirmAdd | Add source | Добавить источник |
| sourceNotice | You can add multiple sources, but only one is used at a time. Use only plugin sources you trust. | Можно добавить несколько источников, но одновременно используется только один. Используйте только те источники, которым доверяете. |
| sourceError | Source operation failed | Операция с источником не выполнена |
| catalogError | The plugin catalog is temporarily unavailable | Каталог плагинов временно недоступен |
| retry | Retry | Повторить |
