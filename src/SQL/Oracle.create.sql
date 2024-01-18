



CREATE TABLE "Заказ"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Оплата" RAW(16) NOT NULL,

	"Клиент" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиент"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Обслуживание"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Этаж" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Адрес"
(

	"primaryKey" RAW(16) NOT NULL,

	"Город" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Состав"
(

	"primaryKey" RAW(16) NOT NULL,

	"Кофе" RAW(16) NOT NULL,

	"Заказ" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Материалы"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Кофе" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Кофе"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Цена" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Стаканчик"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Объем" NUMBER(10) NULL,

	"Кофе" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Этаж"
(

	"primaryKey" RAW(16) NOT NULL,

	"Этаж" NUMBER(10) NULL,

	"Здание" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КофеМашина"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Состояние" NVARCHAR2(10) NULL,

	"Этаж" RAW(16) NOT NULL,

	"Обслуживание" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Оплата"
(

	"primaryKey" RAW(16) NOT NULL,

	"ТипОплаты" NVARCHAR2(6) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Здание"
(

	"primaryKey" RAW(16) NOT NULL,

	"Адреса" NVARCHAR2(255) NULL,

	"НомерДома" NUMBER(10) NULL,

	"Адрес" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Допы"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Количество" NUMBER(10) NULL,

	"Объем" NVARCHAR2(2) NULL,

	"Кофе" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СоставЗаказа"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сумма" FLOAT(126) NULL,

	"Заказ" RAW(16) NOT NULL,

	"Входит" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Заказ"
	ADD CONSTRAINT "Заказ_FОплата_0" FOREIGN KEY ("Оплата") REFERENCES "Оплата" ("primaryKey");

CREATE INDEX "Заказ_IОплата" on "Заказ" ("Оплата");

ALTER TABLE "Заказ"
	ADD CONSTRAINT "Заказ_FКлиент_0" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "Заказ_IКлиент" on "Заказ" ("Клиент");

ALTER TABLE "Обслуживание"
	ADD CONSTRAINT "Обслуживание__8206" FOREIGN KEY ("Этаж") REFERENCES "Этаж" ("primaryKey");

CREATE INDEX "Обслуживание__8421" on "Обслуживание" ("Этаж");

ALTER TABLE "Состав"
	ADD CONSTRAINT "Состав_FКофе_0" FOREIGN KEY ("Кофе") REFERENCES "Кофе" ("primaryKey");

CREATE INDEX "Состав_IКофе" on "Состав" ("Кофе");

ALTER TABLE "Состав"
	ADD CONSTRAINT "Состав_FЗаказ_0" FOREIGN KEY ("Заказ") REFERENCES "Заказ" ("primaryKey");

CREATE INDEX "Состав_IЗаказ" on "Состав" ("Заказ");

ALTER TABLE "Материалы"
	ADD CONSTRAINT "Материалы_FКофе_0" FOREIGN KEY ("Кофе") REFERENCES "Кофе" ("primaryKey");

CREATE INDEX "Материалы_IКофе" on "Материалы" ("Кофе");

ALTER TABLE "Стаканчик"
	ADD CONSTRAINT "Стаканчик_FКофе_0" FOREIGN KEY ("Кофе") REFERENCES "Кофе" ("primaryKey");

CREATE INDEX "Стаканчик_IКофе" on "Стаканчик" ("Кофе");

ALTER TABLE "Этаж"
	ADD CONSTRAINT "Этаж_FЗдание_0" FOREIGN KEY ("Здание") REFERENCES "Здание" ("primaryKey");

CREATE INDEX "Этаж_IЗдание" on "Этаж" ("Здание");

ALTER TABLE "КофеМашина"
	ADD CONSTRAINT "КофеМашина_FЭ_2307" FOREIGN KEY ("Этаж") REFERENCES "Этаж" ("primaryKey");

CREATE INDEX "КофеМашина_IЭтаж" on "КофеМашина" ("Этаж");

ALTER TABLE "КофеМашина"
	ADD CONSTRAINT "КофеМашина_FО_6753" FOREIGN KEY ("Обслуживание") REFERENCES "Обслуживание" ("primaryKey");

CREATE INDEX "КофеМашина_IО_6186" on "КофеМашина" ("Обслуживание");

ALTER TABLE "Здание"
	ADD CONSTRAINT "Здание_FАдрес_0" FOREIGN KEY ("Адрес") REFERENCES "Адрес" ("primaryKey");

CREATE INDEX "Здание_IАдрес" on "Здание" ("Адрес");

ALTER TABLE "Допы"
	ADD CONSTRAINT "Допы_FКофе_0" FOREIGN KEY ("Кофе") REFERENCES "Кофе" ("primaryKey");

CREATE INDEX "Допы_IКофе" on "Допы" ("Кофе");

ALTER TABLE "СоставЗаказа"
	ADD CONSTRAINT "СоставЗаказа__3773" FOREIGN KEY ("Заказ") REFERENCES "Заказ" ("primaryKey");

CREATE INDEX "СоставЗаказа__8782" on "СоставЗаказа" ("Заказ");

ALTER TABLE "СоставЗаказа"
	ADD CONSTRAINT "СоставЗаказа_F_815" FOREIGN KEY ("Входит") REFERENCES "КофеМашина" ("primaryKey");

CREATE INDEX "СоставЗаказа__4976" on "СоставЗаказа" ("Входит");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


