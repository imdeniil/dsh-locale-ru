# STRINGS.md — ревью перевода dsh-locale-ru

Полный список строк по пространствам имён. Колонка **English (original)** — официальный текст DSH; колонка **Русский** — перевод этого плагина. Токены `{имя}` — переменные, сохраняются дословно.

## common

| Ключ | English (original) | Русский |
|---|---|---|
| ok | OK | ОК |
| cancel | Cancel | Отмена |
| close | Close | Закрыть |
| copy | Copy | Копировать |
| copied | Copied | Скопировано |
| retry | Retry | Повторить |
| loading | Loading… | Загрузка… |
| load.failed | Failed to load | Не удалось загрузить |
| submit | Submit | Отправить |
| submitting | Submitting… | Отправка… |
| next | Next | Далее |
| previous | Previous | Назад |
| skip | Skip | Пропустить |
| delete | Delete | Удалить |
| edit | Edit | Изменить |
| save | Save | Сохранить |
| search | Search | Поиск |
| more | More | Ещё |
| collapse | Collapse | Свернуть |
| expand | Expand | Развернуть |
| back | Back | Назад |
| unknown | Unknown | Неизвестно |
| none | None | Нет |
| truncated | Truncated | Обрезано |

## settings.locale

| Ключ | English (original) | Русский |
|---|---|---|
| language.title | Language | Язык |

## settings.agentPreset

| Ключ | English (original) | Русский |
|---|---|---|
| title | Agent preset | Пресет агента |
| description | Applies to sessions you start from now on. Running sessions keep the preset they began with. | Применяется к сессиям, которые вы запускаете с этого момента. Запущенные сессии сохраняют пресет, с которым они начали. |
| loading | Loading presets… | Загрузка пресетов… |
| error | Could not load agent presets. | Не удалось загрузить пресеты агента. |
| userTrust | Custom | Пользовательский |
| seatHint | Agent preset for the session you are about to start | Пресет агента для сессии, которую вы собираетесь запустить |
| headerHint | The agent preset this session runs, fixed when it started | Пресет агента, на котором работает эта сессия; фиксируется при её запуске |
| nav | Agent presets | Пресеты агента |
| sectionIntro | A preset is the plugin composition one session's agent runs — its tools, prompt, and capabilities. Duplicate an existing one and make it yours, or let the agent draft one for you in Creator mode. | Пресет — это композиция плагинов, на которой работает агент сессии: его инструменты, промпт и возможности. Дублируйте существующий и настройте под себя или попросите агента набросать новый в режиме Создателя. |
| builtIn | Built-in | Встроенный |
| setDefault | Set as default | Сделать по умолчанию |
| view | View | Просмотр |
| presetStandardName | Standard mode | Стандартный режим |
| presetStandardDescription | Full coding agent with file editing, shell, file and web search, skills, planning, goals, subagents, and workflows. | Полноценный агент-кодер с редактированием файлов, оболочкой, поиском по файлам и вебу, скиллами, планированием, целями, субагентами и рабочими процессами. |
| presetCodeName | PTC mode | Режим PTC |
| presetCodeDescription | All Standard mode capabilities, with tools exposed through the Code Mode SDK so the model can combine multi-step operations in one TypeScript program. | Все возможности стандартного режима, при этом инструменты доступны через Code Mode SDK — модель может объединять многошаговые операции в одну программу на TypeScript. |
| presetMinimalName | Minimal mode | Минимальный режим |
| presetMinimalDescription | Two-tool coding agent with persistent bash and str_replace_editor. | Агент-кодер с двумя инструментами: постоянный bash и str_replace_editor. |
| presetCordisName | Creator mode | Режим Создателя |
| presetCordisDescription | Built for creating custom agent presets, with all Standard mode capabilities plus runtime inspection, plugin experiments, and preset-authoring guidance. | Создан для разработки собственных пресетов агента: все возможности стандартного режима плюс инспекция среды выполнения, эксперименты с плагинами и помощь в создании пресетов. |
| duplicate | Duplicate | Дублировать |
| duplicateUnavailable | This deployment has no writable preset directory | В этом развёртывании нет доступного для записи каталога пресетов |
| delete | Delete | Удалить |
| presetId | Identifier | Идентификатор |
| presetIdPlaceholder | my-agent | my-agent |
| displayName | Name | Название |
| displayNamePlaceholder | Shown in the picker; defaults to the identifier | Показывается в списке; по умолчанию — идентификатор |
| inUse | In use | Используется |
| builtInGroup | Built-in | Встроенные |
| customGroup | Custom | Пользовательские |
| noDescription | No description. | Без описания. |
| brokenBadge | Failed to load | Не удалось загрузить |
| brokenNoCopy | A preset that failed to load cannot be duplicated | Пресет, который не удалось загрузить, нельзя дублировать |
| copyOf | Copied from | Скопировано из |
| composition | Composition (agent.cordis.yml) | Композиция (agent.cordis.yml) |
| cancel | Cancel | Отмена |
| close | Close | Закрыть |
| retry | Retry | Повторить |
| copyTitle | Duplicate preset | Дублировать пресет |
| copyIntro | The whole preset is copied on this machine. The identifier becomes its directory name and cannot be changed later; everything else is edited in the preset's own files. | Пресет целиком копируется на этой машине. Идентификатор становится именем каталога и позже не меняется; всё остальное редактируется в файлах самого пресета. |
| create | Create | Создать |
| creating | Creating… | Создание… |
| creatorDraft | Draft a custom preset with Creator mode | Набросать свой пресет в режиме Создателя |
| openLocation | Open folder | Открыть папку |
| showLocation | Show location | Показать расположение |
| revealedPathLabel | Preset files: | Файлы пресета: |
| idRequired | Give the preset an identifier. | Укажите идентификатор пресета. |
| idInvalid | Use lowercase letters, digits, and hyphens, starting with a letter or digit. | Используйте строчные буквы, цифры и дефисы, начиная с буквы или цифры. |
| idTaken | A preset with this identifier already exists. | Пресет с таким идентификатором уже существует. |
| deleteTitle | Delete this preset? | Удалить этот пресет? |
| deleteDescription | The preset directory is deleted. Sessions already running on it keep working; new sessions cannot select it. | Каталог пресета будет удалён. Уже запущенные на нём сессии продолжат работу; новые сессии не смогут его выбрать. |
| deleteConfirm | Delete | Удалить |
| deleting | Deleting… | Удаление… |

## command

| Ключ | English (original) | Русский |
|---|---|---|
| search.placeholder | Search… | Поиск… |
| search.aria | Filter options | Фильтр вариантов |
| status.loading | Loading options… | Загрузка вариантов… |
| status.applying | Applying… | Применение… |
| status.empty | No options | Нет вариантов |
| overlay.aria | /{command} options | Варианты команды /{command} |
| listbox.aria | /{command} matches | Совпадения /{command} |

## conversation

| Ключ | English (original) | Русский |
|---|---|---|
| view.chat | Chat | Чат |
| hint.plan | describe your task to generate plan | опишите задачу, чтобы сгенерировать план |
| hint.goal | describe the objective for a long-running task | опишите цель для длительной задачи |
| placeholder.plan | describe your task to generate plan | опишите задачу, чтобы сгенерировать план |
| hint.goal.active | goal active — edit / pause / resume / clear | цель активна — изменить / пауза / продолжить / очистить |
| placeholder.default | Message the agent | Сообщение агенту |
| placeholder.unavailable | Session unavailable | Сессия недоступна |
| placeholder.parentOffline | Parent session offline; sending is unavailable but you can still stop the run | Родительская сессия офлайн; отправка недоступна, но вы всё ещё можете остановить выполнение |
| placeholder.hero | Describe what you want to build | Опишите, что вы хотите создать |
| placeholder.workspace | Choose a workspace to start | Выберите рабочее пространство, чтобы начать |
| input.commands | Commands | Команды |
| input.stop | Stop generating | Остановить генерацию |
| input.send | Send message | Отправить сообщение |
| placeholder.steerQueue | Cmd/Ctrl+Enter steers all queued messages | Cmd/Ctrl+Enter перенаправляет все сообщения из очереди |
| input.accessMode | Access mode, current: {name} | Режим доступа, текущий: {name} |
| image.dropTitle | Drag images here to add them | Перетащите изображения сюда, чтобы добавить их |
| image.dropDesc | Up to {count} images, {size} each | До {count} изображений, каждое не более {size} |
| image.dropBlocked | Images cannot be added right now | Сейчас изображения добавить нельзя |
| image.pending | Pending images | Изображения в ожидании |
| image.openOriginal | View original | Открыть оригинал |
| image.openOriginalLabel | {label}, click to view original | {label}, нажмите, чтобы открыть оригинал |
| image.remove | Remove image {name} | Убрать изображение {name} |
| image.scrollLeft | Scroll images left | Прокрутить изображения влево |
| image.scrollRight | Scroll images right | Прокрутить изображения вправо |
| image.original | Original image | Оригинальное изображение |
| image.label | Image | Изображение |
| image.loadFailed | Image failed to load; click to retry | Не удалось загрузить изображение; нажмите, чтобы повторить |
| image.loading | Loading image… | Загрузка изображения… |
| image.preview | Original image preview | Просмотр оригинала изображения |
| image.closePreview | Close original image preview | Закрыть просмотр оригинала |
| image.serviceUnavailable | Image loading service unavailable | Сервис загрузки изображений недоступен |
| image.unsupportedType | Only PNG, JPG, WebP, and GIF images are supported | Поддерживаются только изображения PNG, JPG, WebP и GIF |
| image.tooMany | A message can include up to {count} images | Сообщение может содержать до {count} изображений |
| image.fileTooLarge | Each image must be smaller than {size} | Каждое изображение должно быть меньше {size} |
| image.totalTooLarge | Images exceed {size} in total; remove some and try again | Изображения в сумме превышают {size}; уберите часть и попробуйте снова |
| image.tooManyPixels | Image resolution is too high; compress it and try again | Слишком высокое разрешение изображения; сожмите его и попробуйте снова |
| image.modelUnsupported | The current model does not support images; switch to a model that does | Текущая модель не поддерживает изображения; переключитесь на модель с поддержкой |
| image.subagentUnsupported | Subagent sessions do not support images yet | Сессии субагентов пока не поддерживают изображения |
| image.sendFailed | Sending images failed ({reason}); re-add them and try again | Не удалось отправить изображения ({reason}); добавьте их снова и попробуйте ещё раз |
| context.aria | {percent} of context used | Использовано {percent} контекста |
| context.used | of context used | контекста использовано |
| context.system | System prompt | Системный промпт |
| context.tools | Tools | Инструменты |
| context.messages | Messages | Сообщения |
| stats.counts | {turns} turns · {steps} steps | {turns} ходов · {steps} шагов |
| stats.llm | LLM {duration} | LLM {duration} |
| stats.toolCall | Tool call {duration} | Вызов инструмента {duration} |
| stats.ttftAverage | TTFT avg {duration} | TTFT в среднем {duration} |
| stats.tokensPerSecond | {throughput} tok/s | {throughput} ток/с |
| stats.cacheHit | Cache hit {percent}% | Попаданий в кэш {percent}% |
| stats.tokens | Input {input} tok · Output {output} tok | Вход {input} ток · Выход {output} ток |
| settings.enter.title | Enter behavior while busy | Поведение Enter во время работы агента |
| settings.enter.description | Busy only; Cmd/Ctrl+Enter uses the other behavior | Только когда агент занят; Cmd/Ctrl+Enter использует другое поведение |
| settings.enter.queue | Queue | В очередь |
| settings.enter.steer | Steer | Перенаправить |
| access.confirm.title | Enable Full access? | Включить полный доступ? |
| access.confirm.description | Full access reduces confirmation steps and lets the agent perform more actions directly, including sensitive operations, file changes, or external commands. Only use it when you trust the current task. | Полный доступ сокращает количество подтверждений и позволяет агенту выполнять больше действий напрямую, включая чувствительные операции, изменения файлов и внешние команды. Используйте его, только если доверяете текущей задаче. |
| access.confirm.acknowledge | I understand the risks and want to continue | Я понимаю риски и хочу продолжить |
| access.confirm.cancel | Cancel | Отмена |
| access.confirm.enable | Enable Full access | Включить полный доступ |
| hero.headline | Into the Unknown | В неизведанное |
| hero.preview | Preview | Предпросмотр |
| hero.chooseWorkspace | Choose workspace | Выбрать рабочее пространство |
| session.hierarchy | Session hierarchy | Иерархия сессий |
| details.title | Details | Подробности |
| details.close | Close details | Закрыть подробности |
| details.empty | Click a tool row in the message flow to view its details | Нажмите на строку инструмента в потоке сообщений, чтобы увидеть подробности |
| details.notInWindow | This call is outside the current window | Этот вызов вне текущего окна |
| details.input | Input | Входные данные |
| details.output | Output | Результат |
| details.running | Running… | Выполняется… |
| todo.title | To-dos | Задачи |
| todo.progress.done | {done} completed | {done} завершено |
| todo.progress.active | {active} in progress | {active} в работе |
| todo.progress.pending | {pending} pending | {pending} в ожидании |
| todo.rowTitle | Update to-do list | Обновить список задач |
| todo.completed | {done}/{total} completed | {done}/{total} завершено |
| chat.loadingHistory | Loading history… | Загрузка истории… |
| chat.loadError | Failed to load history: {message} ({code}) | Не удалось загрузить историю: {message} ({code}) |
| chat.loadOlder | Load earlier | Загрузить более ранние |
| chat.toBottom | Back to bottom | Вернуться вниз |
| message.extraBlock | Extra content block | Дополнительный блок содержимого |
| message.contextInjection | Context injection | Внедрение контекста |
| message.contextRecall | Session recall | Восстановление сессии |
| message.context.instructions.loaded | loaded | загружено |
| message.context.instructions.added | added | добавлено |
| message.context.instructions.updated | updated | обновлено |
| message.context.instructions.removed | removed | удалено |
| message.context.catalog.replaced | Replacement catalog | Каталог замены |
| message.context.catalog.more | … {count} more | … ещё {count} |
| message.context.snapshot.supersedes | Supersedes earlier snapshots | Заменяет более ранние снимки |
| message.context.relay.from | From session {session} | Из сессии {session} |
| message.context.recall.counts | {retained} kept · {omitted} omitted | {retained} оставлено · {omitted} пропущено |
| message.context.recall.truncated | truncated | обрезано |
| message.compaction | Context compacted | Контекст сжат |
| message.compaction.running | Compacting context… | Сжатие контекста… |
| message.compaction.completed | Compacted {items} history items (~{tokens} tokens) | Сжато записей истории: {items} (~{tokens} токенов) |
| message.compaction.expand | View compaction summary | Просмотреть итоги сжатия |
| message.compaction.unavailable | Compaction summary unavailable | Итоги сжатия недоступны |
| message.unknownSurface | Unknown surface event: {type} | Неизвестное событие интерфейса: {type} |
| message.unknownBlock | Unknown content block | Неизвестный блок содержимого |
| message.stopped | Stopped | Остановлено |
| message.branch | Branch into a new conversation | Ответвить в новый разговор |
| message.branchUnavailable | Available only on the last message of a completed turn | Доступно только на последнем сообщении завершённого хода |
| message.retry.active | Retrying model request | Повтор запроса к модели |
| message.retry.cancelled | Model request retry cancelled | Повтор запроса к модели отменён |
| message.retry.started | Retried model request | Запрос к модели повторён |
| message.retry.scheduled | Waiting to retry model request | Ожидание повтора запроса к модели |
| message.retry.status | {label} ({retry}/{maximum}) · {seconds}s | {label} ({retry}/{maximum}) · {seconds} с |
| message.retry.delay | Retry delay:  | Задержка повтора: |
| message.retry.failure | Failure reason:  | Причина сбоя: |
| message.turnError | This turn failed | Этот ход завершился с ошибкой |
| message.maxTokens | Output token limit reached | Достигнут лимит выходных токенов |
| message.maxTokens.hint | The reply was cut off; earlier output is preserved in the conversation. Send "continue" to let the model resume. | Ответ был обрезан; предыдущий вывод сохранён в разговоре. Отправьте «продолжи», чтобы модель продолжила. |
| message.ranFor | Ran for {duration} | Выполнялось {duration} |
| message.ttft | TTFT {seconds}s | TTFT {seconds} с |
| message.tokensPerSecond | {tps} tok/s | {tps} ток/с |
| duration.seconds | {seconds}s | {seconds} с |
| duration.minutes | {minutes}m {seconds}s | {minutes} мин {seconds} с |
| command.running | Running… | Выполняется… |
| command.failed | Command failed | Команда не выполнена |
| command.done | Completed | Завершено |
| command.title | Command | Команда |
| approval.waiting | Waiting for approval | Ожидание подтверждения |
| approval.detail.aria | Approval details | Подробности подтверждения |
| approval.escalation | Tool {toolName} requests privileged execution | Инструмент {toolName} запрашивает привилегированное выполнение |
| approval.reject | Reject | Отклонить |
| approval.allowOnce | Allow once | Разрешить один раз |
| ask.rowTitle | Ask question | Задать вопрос |
| ask.waiting | waiting | ожидание |
| ask.cancelled | cancelled | отменено |
| ask.interrupted | interrupted | прервано |
| ask.answered | {answered}/{total} answered | отвечено {answered}/{total} |
| bash.running | Running | Выполняется |
| bash.failed | Failed | Ошибка |
| bash.stopped | Stopped | Остановлено |
| row.running | Running | Выполняется |
| row.failed | Failed | Ошибка |
| row.stopped | Stopped | Остановлено |
| queue.count | {n} queued messages | Сообщений в очереди: {n} |
| queue.edit | Edit queued message | Изменить сообщение из очереди |
| queue.edit.unsupported | Contains non-text content; editing is not supported yet | Содержит нетекстовое содержимое; изменение пока не поддерживается |
| queue.save | Save queued message | Сохранить сообщение из очереди |
| queue.cancelEdit | Cancel editing | Отменить изменение |
| queue.remove | Remove queued message | Убрать сообщение из очереди |
| queue.steer | Steer queued message | Перенаправить сообщение из очереди |
| queue.steer.unavailable | Steering is available only while the agent is running | Перенаправление доступно, только пока агент работает |
| queue.editFailed | Edit failed: this message may have already started sending. | Не удалось изменить: сообщение могло уже начать отправляться. |
| queue.removeFailed | Removal failed: this message may have already started sending. | Не удалось убрать: сообщение могло уже начать отправляться. |
| queue.steerFailed | Steering failed. Try again. | Не удалось перенаправить. Попробуйте ещё раз. |
| terminal.signal | signal {signal} | сигнал {signal} |
| terminal.exitCode | exit code {code} | код выхода {code} |
| terminal.running | Running | Выполняется |
| terminal.failed | Failed | Ошибка |
| terminal.done | Done | Готово |
| terminal.noOutput | No output | Нет вывода |
| terminal.collapseAria | Collapse output | Свернуть вывод |
| terminal.expandAria | Expand the remaining {n} output lines | Развернуть оставшиеся {n} строк вывода |
| terminal.expandRest | … {n} more lines | … ещё {n} строк |
| json.truncated | … truncated, {total} characters total | … обрезано, всего {total} символов |
| clock.md | {m}/{d} | {d}.{m} |
| clock.ymd | {y}-{m}-{d} | {y}-{m}-{d} |

## cordis

| Ключ | English (original) | Русский |
|---|---|---|
| row.defineTitle | Register Cordis Plugin | Регистрация плагина Cordis |
| row.runTitle | Run Cordis Plugin | Запуск плагина Cordis |
| row.updateTitle | Update Cordis Plugin | Обновление плагина Cordis |
| row.stopTitle | Stop Cordis Plugin | Остановка плагина Cordis |
| row.removeTitle | Remove Cordis Plugin | Удаление плагина Cordis |
| purpose.missing | (no purpose given) | (цель не указана) |
| status.idle | Ready | Готов |
| status.awaitingApproval | Awaiting approval | Ожидает подтверждения |
| status.failed | Run failed | Сбой запуска |
| status.clientPending | Client ready to activate | Клиент готов к активации |
| status.running | Running | Работает |
| status.removed | Removed | Удалён |
| status.superseded | Newer run available | Есть более новый запуск |
| run.removed | This package no longer exists | Этот пакет больше не существует |
| run.superseded | A newer run card is available below | Ниже доступна карточка более нового запуска |
| panel.hint | Run controls live in the Cordis panel above Settings | Управление запуском находится на панели Cordis над настройками |
| panel.plugins.aria | Cordis plugins | Плагины Cordis |
| panel.approvals.aria | Cordis approvals | Подтверждения Cordis |
| panel.trigger | Cordis Plugin | Плагин Cordis |
| panel.runningCount | {count} running | Работает: {count} |
| panel.title | Cordis plugins | Плагины Cordis |
| panel.empty | No plugins defined yet | Пока не определено ни одного плагина |
| panel.loading | Reading… | Чтение… |
| panel.readFailed | Reading the plugin inventory failed: {message} | Не удалось прочитать список плагинов: {message} |
| panel.group.current | This session | Эта сессия |
| panel.group.others | Other sessions | Другие сессии |
| panel.version | Version | Версия |
| panel.current | Current: {packageId} | Текущий: {packageId} |
| panel.next | Next: {packageId} | Следующий: {packageId} |
| action.approve | Allow | Разрешить |
| action.approveOnce | Allow this version only | Разрешить только эту версию |
| action.approvePlugin | Allow future versions of this plugin | Разрешить будущие версии этого плагина |
| action.decline | Decline | Отклонить |
| action.run | Run | Запустить |
| action.stop | Stop | Остановить |
| action.remove | Remove | Удалить |
| action.retry | Retry | Повторить |
| action.rollback | Roll back | Откатить |
| render.failedAbdicated | Rendering failed in {slot}; the default UI was restored: | Сбой отрисовки в {slot}; восстановлен интерфейс по умолчанию: |
| render.failedHeld | Rendering failed in {slot}: | Сбой отрисовки в {slot}: |
| a11y.defining | Defining the plugin | Определение плагина |
| a11y.failed | Definition failed | Не удалось определить |
| a11y.stopped | Definition interrupted | Определение прервано |
| body.source | Plugin source | Исходник плагина |
| body.hostCode | Host | Хост |
| body.clientCode | Client | Клиент |
| body.output | Result | Результат |
| body.copy | Copy | Копировать |
| body.copied | Copied | Скопировано |

## deliverables

| Ключ | English (original) | Русский |
|---|---|---|
| produced.label | Produced | Создано |
| produced.moreOne | + 1 file | + 1 файл |
| produced.more | + {count} files | + файлов: {count} |
| produced.open | Open {name} | Открыть {name} |
| produced.showInFolder | Show in folder | Показать в папке |

## goal

| Ключ | English (original) | Русский |
|---|---|---|
| phase.active | Ongoing Goal | Активная цель |
| phase.paused | Paused Goal | Приостановленная цель |
| phase.blocked | Blocked Goal | Заблокированная цель |
| objective.aria | Goal objective | Формулировка цели |
| commandInput.aria | Command input | Ввод команды |
| action.save | Save goal | Сохранить цель |
| action.cancel | Cancel edit | Отменить изменение |
| action.pause | Pause goal | Приостановить цель |
| action.resume | Resume goal | Продолжить цель |
| action.edit | Edit goal | Изменить цель |
| action.clear | Clear goal | Очистить цель |

## slash.menu

| Ключ | English (original) | Русский |
|---|---|---|
| command | Commands | Команды |
| skill | Skills | Скиллы |
| subagent | Subagents | Субагенты |
| loading | Loading… | Загрузка… |
| suggestions.aria | Trigger suggestions | Подсказки триггеров |

## job

| Ключ | English (original) | Русский |
|---|---|---|
| count.live.one | {count} background job running | {count} фоновая задача выполняется |
| count.live.other | {count} background jobs running | {count} фоновых задач выполняется |
| count.idle.one | {count} background job | {count} фоновая задача |
| count.idle.other | {count} background jobs | {count} фоновых задач |
| list.aria | Background jobs | Фоновые задачи |
| status.running | running | выполняется |
| status.stopping | stopping | останавливается |
| status.completed | completed | завершена |
| status.killed | cancelled | отменена |
| status.failed | failed | сбой |
| duration.seconds | {seconds}s | {seconds} с |
| duration.minutes | {minutes}m {seconds}s | {minutes} мин {seconds} с |
| duration.hours | {hours}h {minutes}m | {hours} ч {minutes} мин |
| duration.title.live | Running for {duration} | Выполняется {duration} |
| duration.title.done | Took {duration} | Заняло {duration} |

## feedback

| Ключ | English (original) | Русский |
|---|---|---|
| action.like | Good response | Хороший ответ |
| action.likeActive | Remove rating | Убрать оценку |
| action.dislike | Bad response | Плохой ответ |
| action.dislikeActive | Remove rating | Убрать оценку |
| note.open | Add a note | Добавить заметку |
| note.placeholder | What was good, or what went wrong? (optional) | Что было хорошо или что пошло не так? (необязательно) |
| note.save | Save | Сохранить |
| note.cancel | Cancel | Отмена |
| note.aria | Feedback note | Заметка обратной связи |
| error.conflict | This feedback changed elsewhere; the latest state is shown | Эта обратная связь была изменена в другом месте; показано последнее состояние |
| error.load | Could not load feedback | Не удалось загрузить обратную связь |
| error.generic | Could not save feedback | Не удалось сохранить обратную связь |

## model

| Ключ | English (original) | Русский |
|---|---|---|
| command.description | Select the model for this conversation | Выбрать модель для этого разговора |
| option.loadError | Catalog failed to load: {message} | Не удалось загрузить каталог: {message} |
| trigger.fallback | Select model | Выбор модели |
| trigger.selectAria | Select model | Выбрать модель |
| trigger.aria | Select model, current {model} | Выбор модели, текущая: {model} |
| trigger.ariaEffort | Select model, current {model}, reasoning effort {effort} | Выбор модели, текущая: {model}, глубина размышлений: {effort} |
| menu.aria | Model and reasoning effort | Модель и глубина размышлений |
| menu.model | Model | Модель |
| menu.effort | Effort | Размышления |
| effort.providerDefault | Default | По умолчанию |
| status.loading | Refreshing model list… | Обновление списка моделей… |
| error.action | Model operation failed: {message} | Не удалось выполнить действие с моделью: {message} |
| action.reload | Reload | Обновить |
| warning.groupLoad | {name} failed to load: {message} | {name}: не удалось загрузить: {message} |
| empty.models | No models available. | Нет доступных моделей. |
| blocked.composer | This model is unavailable — select one to continue | Эта модель недоступна — выберите другую, чтобы продолжить |
| empty.efforts | This model provides no reasoning effort levels. | Эта модель не предоставляет уровней глубины размышлений. |

## settings.permission

| Ключ | English (original) | Русский |
|---|---|---|
| title | Permission | Разрешения |
| description | Choose the default permission mode for new sessions | Выберите режим разрешений по умолчанию для новых сессий |
| loading | Loading | Загрузка |
| unavailable | Unavailable | Недоступно |
| confirm.title | Enable Full access? | Включить полный доступ? |
| confirm.description | Full access lets new sessions reduce confirmation steps and perform more actions directly, including sensitive operations, file changes, or external commands. Only use it when you trust subsequent tasks. | Полный доступ позволяет новым сессиям реже запрашивать подтверждения и выполнять больше действий напрямую, включая чувствительные операции, изменения файлов и внешние команды. Используйте его, только если доверяете последующим задачам. |
| confirm.acknowledge | I understand the risks and want to continue | Я понимаю риски и хочу продолжить |
| confirm.cancel | Cancel | Отмена |
| confirm.enable | Enable Full access | Включить полный доступ |

## permission.access

| Ключ | English (original) | Русский |
|---|---|---|
| confirm.title | «UNRESOLVED:accessEn["confirm.title"]» | Включить полный доступ? |
| confirm.description | «UNRESOLVED:accessEn["confirm.description"]» | Полный доступ сокращает количество подтверждений и позволяет агенту выполнять больше действий напрямую, включая чувствительные операции, изменения файлов и внешние команды. Используйте его, только если доверяете текущей задаче. |
| confirm.acknowledge | «UNRESOLVED:accessEn["confirm.acknowledge"]» | Я понимаю риски и хочу продолжить |
| confirm.cancel | «UNRESOLVED:accessEn["confirm.cancel"]» | Отмена |
| confirm.enable | «UNRESOLVED:accessEn["confirm.enable"]» | Включить полный доступ |

## plan

| Ключ | English (original) | Русский |
|---|---|---|
| chip.on.aria | Plan mode on, press to turn off | Режим планирования включён, нажмите, чтобы выключить |
| chip.on.title | Plan mode on — click to turn off (/plan off) | Режим планирования включён — нажмите, чтобы выключить (/plan off) |
| chip.off.aria | Plan mode off, press to turn on | Режим планирования выключен, нажмите, чтобы включить |
| chip.off.title | Plan mode off — click to turn on (/plan) | Режим планирования выключен — нажмите, чтобы включить (/plan) |

## settings

| Ключ | English (original) | Русский |
|---|---|---|
| trigger | Settings | Настройки |
| title | Settings | Настройки |
| close | Close | Закрыть |
| openDocument | Open configuration file | Открыть файл конфигурации |
| openDocument.error | Could not open configuration file | Не удалось открыть файл конфигурации |
| general.nav | General | Общие |

## directory-browser

| Ключ | English (original) | Русский |
|---|---|---|
| browser.title | Select Workspace Directory | Выберите каталог рабочего пространства |
| browser.home | Home | Домашний каталог |
| browser.newFolder | New folder | Новая папка |
| browser.folderName | Folder name | Имя папки |
| browser.createIn | New folder in "{name}" | Новая папка в «{name}» |
| browser.untitledFolder | Untitled folder | Безымянная папка |
| browser.create | Create | Создать |
| browser.cancel | Cancel | Отмена |
| browser.open | Open | Открыть |
| browser.editPath | Edit path | Изменить путь |
| browser.loading | Loading… | Загрузка… |
| browser.truncated | Too many folders to list; only the beginning is shown. | Слишком много папок для отображения; показано только начало списка. |
| browser.showHidden | Show hidden files | Показать скрытые файлы |

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

## settings.models

| Ключ | English (original) | Русский |
|---|---|---|
| nav | Models | Модели |
| title | Models | Модели |
| intro | Enter your API keys to use models from the following providers. | Введите API-ключи, чтобы использовать модели следующих провайдеров. |
| edit | Edit | Изменить |
| editProvider | Edit {provider} | Изменить: {provider} |
| remove | Delete | Удалить |
| removeProvider | Delete {provider} | Удалить: {provider} |
| deleteTitle | Delete {provider}? | Удалить {provider}? |
| deleteDescription | Deleting {provider} removes its configuration. Any credential it uses is managed elsewhere and will be kept. | Удаление {provider} убирает его настройки. Используемые им учётные данные хранятся отдельно и будут сохранены. |
| deleteDescriptionWithCredential | Deleting {provider} removes its configuration and stored API key. | Удаление {provider} убирает его настройки и сохранённый API-ключ. |
| deleteConfirm | Delete {provider} | Удалить {provider} |
| deleting | Deleting {provider}… | Удаление {provider}… |
| add | Add provider | Добавить провайдера |
| provider | Provider | Провайдер |
| close | Close | Закрыть |
| cancel | Cancel | Отмена |
| apply | Apply | Применить |
| applying | Applying… | Применение… |
| savedProvider | Saved {provider}. | {provider} сохранён. |
| credentialConfigured | API key configured | API-ключ настроен |
| credentialMissing | API key missing | API-ключ отсутствует |
| readOnly | The settings document is read-only in this deployment. | Документ настроек в этом развёртывании доступен только для чтения. |
| loadFailed | Loading the provider directory failed | Не удалось загрузить каталог провайдеров |
| conflict | Someone else changed these settings while this card was open. Close it and reopen to edit the current values. | Кто-то другой изменил эти настройки, пока карточка была открыта. Закройте и откройте её снова, чтобы редактировать актуальные значения. |
| retry | Retry | Повторить |
| keyInput | API key | API-ключ |
| keyPlaceholder | Enter your API key | Введите ваш API-ключ |
| keyPlaceholderNative | Enter an API key, or leave blank to use environment authentication | Введите API-ключ или оставьте пустым для аутентификации через среду |
| keyStored | Configured — enter a new value to replace | Настроен — введите новое значение, чтобы заменить |
| keyEnvLocked | Provided by the launch environment (read-only) | Задаётся средой запуска (только для чтения) |
| customized | Customized settings | Изменённые настройки |
| baseUrl | Base URL | Базовый URL |
| baseUrlDefault | Provider default | По умолчанию провайдера |
| models | Models | Модели |
| modelsInherited | Using the adapter defaults | Используются значения адаптера по умолчанию |
| modelsCustomized | Customized model catalog | Изменённый каталог моделей |
| resetModels | Restore defaults | Восстановить по умолчанию |
| model | Model | Модель |
| modelId | Model ID | ID модели |
| modelName | Display name | Отображаемое имя |
| modelNamePlaceholder | Uses the model ID when empty | Если пусто, используется ID модели |
| contextWindow | Context window | Окно контекста |
| contextWindowPlaceholder | Uses the provider default | По умолчанию провайдера |
| maxTokens | Max output tokens | Максимум выходных токенов |
| maxTokensPlaceholder | Uses the provider default | По умолчанию провайдера |
| modelAdvanced | Capacities | Ёмкости |
| addModel | Add model | Добавить модель |
| removeModel | Delete model | Удалить модель |
| modelsEmpty | No models will be shown in the selector. Unlisted IDs can still be sent directly. | В списке не будет показано ни одной модели. Неуказанные ID всё равно можно отправлять напрямую. |
| keyBlank | Enter the API key, or leave the field empty to keep the stored one. | Введите API-ключ или оставьте поле пустым, чтобы сохранить текущий. |
| keyBlankNew | Enter the API key, or leave the field empty if this provider authenticates another way. | Введите API-ключ или оставьте поле пустым, если этот провайдер аутентифицируется иначе. |
| keyIllegalCharacters | This API key is not in a valid format. Please check it. | API-ключ имеет неверный формат. Проверьте его. |
| modelIdRequired | Model ID is required. | Укажите ID модели. |
| modelIdDuplicate | Model ID must be unique. | ID модели должен быть уникальным. |
| modelNameInvalid | Display name cannot be empty. | Отображаемое имя не может быть пустым. |
| modelContextInvalid | Context window must be a positive count, like 131072, 256K, or 1M. | Окно контекста должно быть положительным числом, например 131072, 256K или 1M. |
| modelMaxTokensInvalid | Max output tokens must be a positive count, like 8192, 64K, or 1M. | Максимум выходных токенов должен быть положительным числом, например 8192, 64K или 1M. |
| advancedHint | Other fields live in settings.yaml; edit that section directly. | Остальные поля находятся в settings.yaml; редактируйте этот раздел напрямую. |
| modelCapacityInvalid | A capacity must be a number, optionally suffixed K or M. | Ёмкость должна быть числом с необязательным суффиксом K или M. |
| modelDuplicate | Each model ID may appear once. | Каждый ID модели может встречаться только один раз. |
| modelContextWindow | Context window | Окно контекста |
| modelMaxTokens | Max output tokens | Максимум выходных токенов |
| fetchModels | Fetch available models | Получить доступные модели |
| fetching | Asking the provider… | Запрос к провайдеру… |
| fetchNeedsBaseUrl | Enter the base URL first, then fetch. | Сначала введите базовый URL, затем получите список. |
| fetchEmpty | The provider listed no models. Add them by hand. | Провайдер не вернул моделей. Добавьте их вручную. |
| fetchTitle | Choose models to add | Выберите модели для добавления |
| fetchDescription | These are the models this provider has available. Choose the ones to add. | Это модели, доступные у провайдера. Отметьте те, которые нужно добавить. |
| fetchAdopt | Add selected | Добавить выбранные |
| customAdd | Add a custom provider | Добавить собственного провайдера |
| customTitle | Custom provider | Собственный провайдер |
| customTag | Custom | Собственный |
| customRoute | Provider ID | ID провайдера |
| customRouteHint | Lowercase identifier, starting with a letter, that uniquely names this provider in requests and as its credential name. | Строчный идентификатор, начинающийся с буквы; однозначно именует провайдера в запросах и как имя учётных данных. |
| customRouteInvalid | Start with a lowercase letter; then lowercase letters, digits, and dashes. | Начните со строчной буквы; далее — строчные буквы, цифры и дефисы. |
| customRouteTaken | A provider already uses this ID. | Этот ID уже используется другим провайдером. |
| customDisplayName | Display name | Отображаемое имя |
| customApi | API protocol | Протокол API |
| customApiUnset | Not selected | Не выбрано |
| customNeedsBaseUrl | A custom provider needs a base URL. | Собственному провайдеру нужен базовый URL. |
| customNeedsModels | A custom provider needs at least one model. | Собственному провайдеру нужна хотя бы одна модель. |
| create | Create provider | Создать провайдера |
| creating | Creating… | Создание… |
| welcomeTitle | Internal Testing Notice | Уведомление о бета-тестировании |
| welcomeBody | «UNRESOLVED:WELCOME_NOTICE_COPY.en.body» | DeepSeek Harness 0.1 всё ещё находится на этапе тестирования среди разработчиков харнессов. Многим местам требуется доработка, и мы ждём отзывов от сообщества разработчиков. Основные плагины и базовые API DeepSeek Harness будут быстро развиваться в ближайшие месяцы.  Мы с нетерпением ждём возможности вместе с разработчиками всего мира исследовать пределы возможностей ИИ на базе открытой, переиспользуемой и компонуемой инфраструктуры. Приглашаем разработчиков харнессов со всего мира присоединиться к экосистеме плагинов DSH. |
| welcomeContinue | Continue | Продолжить |
| welcomeError | The acknowledgement could not be saved. Please try again. | Не удалось сохранить подтверждение. Попробуйте ещё раз. |
| onboardingTitle | Add an API key to get started | Добавьте API-ключ, чтобы начать |
| onboardingDescription | Configure the official DeepSeek provider to start building. | Настройте официальный провайдер DeepSeek, чтобы начать работу. |
| onboardingLater | Configure later | Настроить позже |
| onboardingSave | Save and continue | Сохранить и продолжить |
| onboardingSaving | Saving… | Сохранение… |
| keyRequired | Enter an API key to continue. | Введите API-ключ, чтобы продолжить. |

## settings.pluginInventory

| Ключ | English (original) | Русский |
|---|---|---|
| tab | Plugin list | Список плагинов |
| loading | Reading plugins… | Чтение плагинов… |
| error | Plugins are temporarily unavailable. | Плагины временно недоступны. |
| retry | Retry | Повторить |
| search | Search plugins | Поиск плагинов |
| catalog | Plugin list | Список плагинов |
| empty | No plugins are available. | Нет доступных плагинов. |
| emptySearch | No matching plugins. | Нет подходящих плагинов. |
| enabledTag | Enabled | Включён |
| disabledTag | Disabled | Выключен |
| configuration | Configuration | Конфигурация |
| cordis | Cordis status | Статус Cordis |
| unobserved | Not mounted | Не смонтирован |
| pending | Waiting for dependencies | Ожидает зависимостей |
| loadingPhase | Loading | Загрузка |
| active | Mounted | Смонтирован |
| failed | Mount failed | Сбой монтирования |
| unloading | Unloading | Размонтирование |

## settings.plugins

| Ключ | English (original) | Русский |
|---|---|---|
| nav | Plugins | Плагины |
| title | Plugins | Плагины |
| intro | Configure and inspect the plugins installed in this deployment. | Настройка и просмотр плагинов, установленных в этом развёртывании. |
| tabs | Plugin views | Представления плагинов |
| configurableTab | Plugin configuration | Настройки плагинов |
| empty | This deployment exposes no plugin settings. | Это развёртывание не предоставляет настроек плагинов. |
| overridden | Overridden | Переопределено |
| reset | Reset to default | Сбросить по умолчанию |
| readOnly | This deployment stores settings read-only. | Это развёртывание хранит настройки только для чтения. |
| expand | Show settings | Показать настройки |
| collapse | Hide settings | Скрыть настройки |
| save | Save | Сохранить |
| saving | Saving… | Сохранение… |
| discard | Discard | Отменить |
| unsaved | Unsaved | Не сохранено |
| saveFailed | The deployment did not accept these values; they were left for you to correct. | Развёртывание не приняло эти значения; они оставлены на исправление. |
| invalidNumber | Enter a number, or leave blank to use the default. | Введите число или оставьте пустым для значения по умолчанию. |
| bashTitle | Shell | Оболочка |
| bashDescription | Limits every command the agent runs. | Ограничения для каждой команды, выполняемой агентом. |
| bashTimeoutMs | Command timeout (ms) | Таймаут команды (мс) |
| bashTimeoutMsHint | How long one command may run before it is terminated. | Как долго может выполняться одна команда до принудительного завершения. |
| bashMaxOutputBytes | Output cap per stream (bytes) | Лимит вывода на поток (байт) |
| bashMaxOutputBytesHint | Output beyond this spills to a temporary file rather than being lost. | Вывод сверх лимита уходит во временный файл, а не теряется. |
| agentLoopTitle | Agent loop | Цикл агента |
| agentLoopDescription | How the agent dispatches tool calls. | Как агент распределяет вызовы инструментов. |
| agentLoopMaxParallel | Parallel tool calls | Параллельные вызовы инструментов |
| agentLoopMaxParallelHint | Upper bound on parallel-safe calls running at once within one step. | Верхний предел одновременно выполняемых безопасных для параллельности вызовов в одном шаге. |
| webSearchTitle | Web search | Веб-поиск |
| webSearchDescription | The DeepSeek search provider. | Провайдер поиска DeepSeek. |
| webSearchApiKey | API key | API-ключ |
| webSearchApiKeyHint | Stored outside the settings file. Leave blank to keep the current key. | Хранится вне файла настроек. Оставьте пустым, чтобы сохранить текущий ключ. |
| webSearchApiKeySet | A key is configured. | Ключ настроен. |
| webSearchApiKeyUnset | No key is configured; search is unavailable until one is. | Ключ не настроен; поиск будет недоступен, пока он не появится. |
| webSearchBaseUrl | Endpoint | Адрес |
| webSearchBaseUrlHint | Leave blank to use the provider default. | Оставьте пустым для значения по умолчанию провайдера. |
| webSearchMaxUses | Max searches per request | Максимум поисков на запрос |
| webSearchMaxUsesHint | How many times one request may search before it must answer. | Сколько раз один запрос может обращаться к поиску, прежде чем обязан ответить. |

## sidebar

| Ключ | English (original) | Русский |
|---|---|---|
| session.new | New Session | Новая сессия |
| session.new.label | New session | Новая сессия |
| toggle.open | Open sidebar | Открыть боковую панель |
| toggle.collapse | Collapse sidebar | Свернуть боковую панель |

## skill

| Ключ | English (original) | Русский |
|---|---|---|
| row.running | Loading skill | Загрузка скилла |
| row.failed | Skill load failed | Не удалось загрузить скилл |
| row.stopped | Skill load stopped | Загрузка скилла остановлена |
| row.instructions | Instructions | Инструкции |
| menu.userOnly | user-only | только пользовательский |

## subagent

| Ключ | English (original) | Русский |
|---|---|---|
| diagnostic.corrupt | corrupted session record | повреждённая запись сессии |
| diagnostic.unsupported | unsupported subagent record version | неподдерживаемая версия записи субагента |
| diagnostic.unavailable | session record temporarily unavailable | запись сессии временно недоступна |
| duration.seconds | {seconds}s | {seconds} с |
| duration.minutes | {minutes}m {seconds}s | {minutes} мин {seconds} с |
| duration.hours | {hours}h {minutes}m {seconds}s | {hours} ч {minutes} мин {seconds} с |
| duration.days | {days}d | {days} д |
| duration.daysHours | {days}d {hours}h | {days} д {hours} ч |
| duration.months | ~{months}mo | ~{months} мес |
| duration.monthsDays | ~{months}mo {days}d | ~{months} мес {days} д |
| duration.years | ~{years}y | ~{years} г |
| duration.yearsMonths | ~{years}y {months}mo | ~{years} г {months} мес |
| duration.exactDays | {days}d {hours}h {minutes}m {seconds}s | {days} д {hours} ч {minutes} мин {seconds} с |
| duration.exactTitle | Total active duration: {duration} | Суммарное время активности: {duration} |
| loading.label | Loading subagents… | Загрузка субагентов… |
| loading.aria | Loading subagents | Загрузка субагентов |
| load.error | Unable to load subagents | Не удалось загрузить субагентов |
| retry | Retry | Повторить |
| mode.oneShot | one-shot | одноразовый |
| mode.continuable | continuable | продолжаемый |
| activity.running | running | работает |
| activity.inactive | not running | не работает |
| branch.collapse | Collapse {label} descendants | Свернуть потомков {label} |
| branch.expand | Expand {label} descendants | Развернуть потомков {label} |
| count.total.one | {count} subagent | {count} субагент |
| count.total.other | {count} subagents | {count} субагентов |
| count.running.one | {count} subagent running | {count} субагент работает |
| count.running.other | {count} subagents running | {count} субагентов работает |
| tree.aria | Subagent sessions | Сессии субагентов |
| readonly.oneShot.title | One-shot subagent record | Одноразовая запись субагента |
| readonly.title | This subagent is read-only for now | Этот субагент пока доступен только для чтения |
| readonly.oneShot.body | One-shot tasks do not accept follow-ups; review the full execution record here. | Одноразовые задачи не принимают продолжение; полный отчёт о выполнении — здесь. |
| readonly.body | The parent session is offline; reopen it to continue sending messages. | Родительская сессия офлайн; откройте её, чтобы продолжить отправку сообщений. |

## settings.theme

| Ключ | English (original) | Русский |
|---|---|---|
| appearance.title | Appearance | Оформление |
| appearance.light | Light | Светлое |
| appearance.dark | Dark | Тёмное |
| appearance.system | System | Системное |

## trajectory

| Ключ | English (original) | Русский |
|---|---|---|
| view.trajectory | Trajectory | Траектория |
| toolbar.aria | Trajectory toolbar | Панель траектории |
| toolbar.duration | Duration | Длительность |
| toolbar.useActualDuration | Use actual duration | Фактическая длительность |
| toolbar.useEqualWidth | Use equal-width operations | Равная ширина операций |
| toolbar.actualTime | Actual time | Фактическое время |
| toolbar.turns | Turns | Ходы |
| toolbar.expandTurns | Expand turns | Развернуть ходы |
| toolbar.collapseTurns | Collapse turns | Свернуть ходы |
| toolbar.calls | Calls | Вызовы |
| toolbar.expandCalls | Expand calls | Развернуть вызовы |
| toolbar.collapseCalls | Collapse calls | Свернуть вызовы |
| toolbar.search | Search trajectory | Поиск по траектории |
| toolbar.searchPlaceholder | Search | Поиск |

## question

| Ключ | English (original) | Русский |
|---|---|---|
| error.incomplete | Please complete this question first. | Сначала завершите этот вопрос. |
| error.unanswered | Please select an option or enter a custom answer. | Выберите вариант или введите свой ответ. |
| nav.prev | Previous question | Предыдущий вопрос |
| nav.next | Next question | Следующий вопрос |
| nav.minimize | Collapse the question card | Свернуть карточку вопроса |
| nav.maximize | Expand the question card | Развернуть карточку вопроса |
| nav.cancel | Dismiss all questions | Скрыть все вопросы |
| option.recommended | Recommended | Рекомендуется |
| custom.placeholder | Type your answer | Введите свой ответ |
| action.skip | Skip this question | Пропустить вопрос |
| action.next | Next | Далее |
| plan.header | Plan review | Проверка плана |
| plan.approve | Approve | Одобрить |
| plan.decline | Refuse | Отклонить |
| plan.discuss | Chat about it | Обсудить |

## workflowRun

| Ключ | English (original) | Русский |
|---|---|---|
| run.title | {name} | {name} |
| run.members.one | {count} member | {count} участник |
| run.members.other | {count} members | {count} участников |
| run.empty | No members started | Ни один участник не запущен |
| phase.unassigned | Unphased | Без фазы |
| phase.empty | Empty phase name | Пустое имя фазы |
| statusCount.running | Running {count} | Работает: {count} |
| statusCount.completed | Completed {count} | Завершено: {count} |
| statusCount.failed | Failed {count} | Сбой: {count} |
| statusCount.cancelled | Cancelled {count} | Отменено: {count} |
| statusCount.interrupted | Interrupted {count} | Прервано: {count} |
| member.empty | Empty member name | Пустое имя участника |
| member.open | Open {name} | Открыть {name} |
| status.running | Running | Работает |
| status.completed | Completed | Завершено |
| status.failed | Failed | Сбой |
| status.cancelled | Cancelled | Отменено |
| status.interrupted | Interrupted | Прервано |

## workspace

| Ключ | English (original) | Русский |
|---|---|---|
| group.ungrouped | Ungrouped | Без группы |
| session.new | New Session | Новая сессия |
| section.workspaces | Workspaces | Рабочие пространства |
| section.sessions | Sessions | Сессии |
| viewOptions.label | View options | Параметры просмотра |
| groupBy.label | Group by | Группировка |
| groupBy.workspace | WorkSpace | По рабочим пространствам |
| groupBy.flat | In one list | Единым списком |
| orderBy.label | Order by | Сортировка |
| orderBy.manual | Manual | Вручную |
| orderBy.updated | Last updated | По времени обновления |
| sessions.expand | Show {n} more sessions | Показать ещё {n} сессий |
| sessions.collapse | Show less | Показать меньше |
| empty.none | No sessions yet | Сессий пока нет |
| empty.noMatches | No matches | Нет совпадений |
| workspace.add | Add workspace | Добавить рабочее пространство |
| search.sessions.aria | Search sessions | Поиск по сессиям |
| search.placeholder | Search sessions... | Поиск сессий… |
| search.clear | Clear search | Очистить поиск |
| search.results.aria | Search results | Результаты поиска |
| search.pending | Searching session history… | Поиск по истории сессий… |
| search.unavailable | Content search is temporarily unavailable. Showing name matches. | Поиск по содержимому временно недоступен. Показаны совпадения по названию. |
| search.noMatches | No matching sessions | Нет подходящих сессий |
| search.hasMore | Showing the first {n} results. Narrow your search. | Показаны первые {n} результатов. Сузьте запрос. |
| menu.addWorkspace | Add workspace… | Добавить рабочее пространство… |
| picker.loading | Loading workspaces… | Загрузка рабочих пространств… |
| conflict.named | A workspace named “{name}” already exists. | Рабочее пространство «{name}» уже существует. |
| folderError.title | Couldn’t open folder | Не удалось открыть папку |
| folderError.retry | Choose again | Выбрать снова |
| rename | Rename | Переименовать |
| rename.workspace.title | Rename workspace | Переименовать рабочее пространство |
| rename.session.title | Rename session | Переименовать сессию |
| field.workspaceName | Workspace name | Название рабочего пространства |
| field.sessionName | Session name | Название сессии |
| delete.workspace | Delete workspace | Удалить рабочее пространство |
| delete.desc | This removes “{name}” from the workspace list. The folder and session logs will be kept. Its sessions will appear under Ungrouped. | «{name}» будет убрано из списка рабочих пространств. Папка и журналы сессий будут сохранены. Его сессии появятся в разделе «Без группы». |
| delete.pending | Deleting workspace… | Удаление рабочего пространства… |
| menu.fork | Fork session | Ответвить сессию |
| menu.archiveSession | Archive session | Архивировать сессию |
| sessions.count.one | {n} session | {n} сессия |
| sessions.count.other | {n} sessions | {n} сессий |
| actions.workspace.aria | Workspace actions for {name} | Действия для рабочего пространства {name} |
| actions.session.aria | Session actions for {name} | Действия для сессии {name} |
| actions.newSession.aria | New session in {name} | Новая сессия в {name} |
| status.running | Running | Работает |
| status.subagentsRunning.one | {n} subagent running | {n} субагент работает |
| status.subagentsRunning.other | {n} subagents running | {n} субагентов работает |
| status.idle | Idle | Простой |
| status.waitingApproval | Waiting for approval | Ожидает подтверждения |
| status.planReview | Plan awaiting review | План ждёт проверки |
| status.waitingAnswer | Waiting for answer | Ждёт ответа |
| status.completed | Completed | Завершено |
| hover.created | Created {time} | Создано {time} |
| hover.copied | Copied | Скопировано |
| date.ymd | {y}-{m}-{d} | {y}-{m}-{d} |
| time.now | now | сейчас |
| time.minutes | {n}min | {n} мин |
| time.hours | {n}h | {n} ч |
| time.days | {n}d | {n} д |
| time.months | {n}mo | {n} мес |
| time.years | {n}y | {n} г |
| time.ago | {t} ago | {t} назад |

## session-log-download

| Ключ | English (original) | Русский |
|---|---|---|
| dialog.preparingTitle | Exporting Session | Экспорт сессии |
| dialog.preparingDescription | Preparing a ZIP containing this Session, its sub-Sessions, and attachments. | Подготовка ZIP-архива с этой сессией, её подсессиями и вложениями. |
| dialog.successTitle | Session download started | Загрузка сессии началась |
| dialog.successDescription | The browser is downloading the Session ZIP. | Браузер скачивает ZIP-архив сессии. |
| dialog.errorTitle | Session export failed | Не удалось экспортировать сессию |
| dialog.close | Close | Закрыть |
| dialog.commandFailed | Could not start the Session export. | Не удалось запустить экспорт сессии. |
