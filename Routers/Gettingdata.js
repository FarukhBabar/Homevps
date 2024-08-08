import express from "express"
import { Free, DAta, Delitem, PalletDAta,Cont,LoundryDAta,LoundryFree,LoundryDelitem,Loundrysingl,IroningDAta,IroningFree,IroningDelitem,Ironingsingl,AirersFree,Airerssingl,AirersDelitem,AirersDAta,TablewearDAta,Tablewearsingl,TablewearDelitem,TablewearFree,DisposibleDAta,DisposibleDelitem,Disposiblesingl,DisposibleFree,Drisingle,ShowheadDAta,ShowheadDelitem,Showheadsingl,ShowheadFree,Bathacesssingl,BathacessDelitem,BathacessFree,BathacessDAta,Bathmatessingl,BathmatesDAta,BathmatesFree,BathmatesDelitem,ShowerDAta,ShowerFree,ShowerDelitem,Sowersingl,MirorDAta,MirrorrFree,Mirrorrsingl,MirrorDelitem,BathdeDAta,BathdeDelitem,Bathromdesingl ,BathdeFree, Electricalsingle,delcont ,newsingle,Foodssinglepage, palletsing,Bathromsingl,Lightersingle, PalletFree ,ElectricalDAta , BathDelitem, BathDAta, BathFree,SmokinDAta, SmokinFree, SmokinDelitem, ElectricalDelitem,ElectricalFree ,PalletDelitem, NewDAta, NewFree, NewDelitem, FoodDAta, FoodFree, FoodDelitem, DriDAta, DriFree, DriDelitem, LighterDAta, LighterFree, LighterDelitem } from "../Controller/Gettingdata.js"
import { BatteriesDAta,FirstaidDAta,FirstaidFree,FirstaidDelitem,Firstaidsingl,StvDelitem, BatteriesDelitem, ObsticalDAta,ObsticalDelitem , ObsticalFree , Obsticalsingl, BatteriesFree , Batteriessingl,PhoneDAta,PhoneDelitem,PhoneFree,Phonesingl, ElectricFree, ElectricDAta, ElectricDelitem, Electricsingl, ApronsDAta, ApronsFree, ApronsDelitem, Apronssingl, BeddingDAta, BeddingFree, BeddingDelitem, Beddingsingl, ClothingDAta, ClothingFree, ClothingDelitem, Clothingsingl, FreshnerDAta, FreshnerFree, FreshnerDelitem, Freshnersingl, AkonobolDAta, AkonobolFree, AkonobolDelitem, Akonobolsingl, ClockDAta, ClockFree, ClockDelitem, Clocksingl, CameraDAta, CameraFree, Camerasingl, CameraDelitem, DigitalDAta, DigitalFree, DigitalDelitem, Digitalsingl, CookwareDAta, CookwareFree, CookwareDelitem, Cookwaresingl, CrockeryDAta, CrockeryFree, CrockeryDelitem, Crockerysingl, DinnerDAta, DinnerFree, DinnerDelitem, Dinnersingl, RentokilDAta, RentokilFree, Rentokilsingl, RentokilDelitem, StvDAta, StvFree, Stvsingl, CottonDAta, CottonDelitem, Cottonsingl, CottonFree, BabyDAta, BabyFree, BabyDelitem, Babysingl, FreshnFree, FreshnDAta, FreshnDelitem, Freshnsingl, CarDAta, CarFree, CarDelitem, Carsingl, BleechDAta, BleechFree, BleechDelitem, Bleechsingl, BakewareDAta, BakewareFree, BakewareDelitem, Bakewaresingl, BarewareDAta, BarewareFree, BarewareDelitem, Barewaresingl, BirdsDAta, BirdsFree, BirdsDelitem, Birdssingl, CatDAta, CatFree, CatDelitem, Catsingl, BabeyDAta, BabeyFree, BabeyDelitem, Babeysingl, KidssDAta, KidssDelitem, Kidsssingl, KidssFree, BBqDAta, BBqFree, BBqDelitem, BBqsingl, BirdcareDAta, BirdcareFree, BirdcareDelitem, Birdcaresingl, BaloonDAta, BaloonFree, BaloonDelitem, Baloonsingl, PumpsFree, PumpsDelitem, Pumpssingl, PumpsDAta, BannerDAta, BannerFree, BannerDelitem, Bannersingl, CrystalDAta, CrystalFree, CrystalDelitem, Crystalsingl, CakesDAta, CakesFree, Cakessingl, CakesDelitem, FurnitureDAta, FurnitureFree, FurnitureDelitem, Furnituresingl, MatesDAta, MatesFree, MatesDelitem, Matessingl, CandelDAta, CandelFree, CandelDelitem, Candelsingl, STDAta, STFree, STDelitem, STsingl, FoodconDAta, FoodconFree, FoodconDelitem, Foodconsingl, kidsplasDAta, kidsplasFree, kidsplasDelitem, kidsplassingl, SportsDAta, SportsFree, SportsDelitem, Sportssingl, FlaskDAta, FlaskFree, FlaskDelitem, Flasksingl, ArtcraftFree, ArtcraftDAta, ArtcraftDelitem, Artcraftsingl, BooksDAta, BooksFree, BooksDelitem, Bookssingl, BrushwareDAta, BrushwareFree, BrushwareDelitem, Brushwaresingl, DusterDAta, DusterFree, DusterDelitem, Dustersingl, ArtificalDAta, ArtificalFree, ArtificalDelitem, Artificalsingl, BouquetsDAta, BouquetsFree, BouquetsDelitem, Bouquetssingl } from "../Controller/Gettingsecond.js";

import { CandelesDAta, CandelesFree, Candelessingl, CarpoDAta, CarpoFree, Carposingl, CraftpoDAta, CraftpoDelitem, CraftpoFree, Craftposingl, DisposiblDAta, DisposiblDelitem, DisposiblFree, Disposiblsingl, DiytoolsDAta, DiytoolsDelitem, DiytoolsFree, Diytoolssingl, FoodpoDAta, FoodpoDelitem, FoodpoFree, Foodposingl, HoiseryDAta, HoiseryDelitem, HoiseryFree, Hoiserysingl, HouseholdclDAta, HouseholdclDelitem, HouseholdclFree, Householdclsingl, HouseholdprDAta, HouseholdprDelitem, HouseholdprFree, Householdprsingl, KitchenwearpDAta, KitchenwearpDelitem, KitchenwearpFree, Kitchenwearpsingl, LightergasDAta, LightergasDelitem, LightergasFree, Lightergassingl, LoundryironDAta, LoundryironDelitem, LoundryironFree, Loundryironsingl, PestconDAta, PestconDelitem, PestconFree, Pestconsingl, PotoyDAta, PotoyDelitem, PotoyFree, Potoysingl, ReadingDAta, ReadingDelitem, ReadingFree, Readingsingl, ShoeDAta, ShoeDelitem, ShoeFree, Shoesingl, StationeyDAta, StationeyDelitem, StationeyFree, Stationeysingl } from "../Controller/Pondlinegetting.js";
import { BagslDAta, BagslDelitem, BagslFree, Bagslsingl, BasketstDAta, BasketstDelitem, BasketstFree, Basketstsingl, GlovesDAta, GlovesDelitem, GlovesFree, Glovessingl, LuggageDAta, LuggageDelitem, LuggageFree, Luggagesingl, MopsDAta, MopsDelitem, MopsFree, Mopssingl, SpongeDAta, SpongeDelitem, SpongeFree, Spongesingl } from "../Controller/cleaningmatterial/Cleaninggetting.js";
import { BarrientDAta, BarrientDelitem, BarrientFree, Barrientsingl, BartolinDAta, BartolinDelitem, BartolinFree, Bartolinsingl, BirbrandFree, BirdbrandDAta, BirdbrandDelitem, Birdbrandsingl, BlackDAta, BlackDelitem, BlackFree, Blacksingl, BonitDAta, BonitDelitem, BonitFree, Bonitsingl, BostikDAta, BostikDelitem, BostikFree, Bostiksingl, BriwaxDAta, BriwaxDelitem, BriwaxFree, Briwaxsingl, BrookDAta, BrookDelitem, BrookFree, Brooksingl, CarplanDAta, CarplanDelitem, CarplanFree, Carplansingl, CarproDAta, CarproDelitem, CarproFree, Carprosingl, ChomisDAta, ChomisDelitem, ChomisFree, Chomissingl, CommandDAta, CommandDelitem, CommandFree, Commandsingl, CoralDAta, CoralDelitem, CoralFree, Coralsingl, CrownDAta, CrownDelitem, CrownFree, Crownsingl, DarperDAta, DarperDelitem, DarperFree, Darpersingl, DektonDAta, DektonDelitem, DektonFree, Dektonsingl, DemsumDAta, DemsumDelitem, DemsumFree, Demsumsingl, EdcoDAta, EdcoDelitem, EdcoFree, Edcosingl, EverDAta, EverDelitem, EverFree, Eversingl, ExitexDAta, ExitexDelitem, ExitexFree, Exitexsingl, FitDAta, FitDelitem, FitFree, Fitsingl, GasDAta, GasDelitem, GasFree, Gassingl, GlobalDAta, GlobalDelitem, GlobalFree, Globalsingl, GorilaDAta, GorilaDelitem, GorilaFree, Gorilasingl, HagesanDAta, HagesanDelitem, HagesanFree, Hagesansingl, HardwareDAta, HardwareDelitem, HardwareFree, Hardwaresingl, HarrisDAta, HarrisDelitem, HarrisFree, Harrissingl, HilkaAta, HilkaDelitem, HilkaFree, Hilkasingl, HumnrolDAta, HumnrolDelitem, HumnrolFree, Humnrolsingl, JbwelDAta, JbwelDelitem, JbwelFree, Jbwelsingl, KilrockDAta, KilrockDelitem, KilrockFree, Kilrocksingl, LadderDAta, LadderDelitem, LadderFree, Laddersingl, LocktileDAta, LocktileDelitem, LocktileFree, Locktilesingl } from "../Controller/Diy/Diygeeting.js";
import { AmtechDAta, AmtechDelitem, AmtechFree, Amtechsingl, AntiquxDAta, AntiquxDelitem, AntiquxFree, Antiquxsingl, LynwoodDAta, LynwoodDelitem, LynwoodFree, Lynwoodsingl, OxfordDAta, OxfordDelitem, OxfordFree, Oxfordsingl, PestcoDAta, PestcoDelitem, PestcoFree, Pestcontsingl, PlasplugDAta, PlasplugDelitem, PlasplugFree, Plasplugsingl, PrimacarDAta, PrimacarDelitem, PrimacarFree, Primacarsingl, RolsonDAta, RolsonDelitem, RolsonFree, Rolsonsingl, RonsealDAta, RonsealDelitem, RonsealFree, Ronsealsingl, RustinsDAta, RustinsDelitem, RustinsFree, Rustinssingl, SecrupDAta, SecrupDelitem, SecrupFree, Secrupsingl, SecuritDAta, SecuritDelitem, SecuritFree, Securitsingl, ShortageDAta, ShortageDelitem, ShortageFree, Shortagesingl, SoudalDAta, SoudalDelitem, SoudalFree, Soudalsingl, StarpackDAta, StarpackDelitem, StarpackFree, Starpacksingl, SterlingDAta, SterlingDelitem, SterlingFree, Sterlingsingl, UltratapeDAta, UltratapeDelitem, UltratapeFree, Ultratapesingl, UniconDAta, UniconDelitem, UniconFree, Uniconsingl, VacuumDAta, VacuumDelitem, VacuumFree, Vacuumsingl, VelcroDAta, VelcroDelitem, VelcroFree, Velcrosingl, VfmpaintDAta, VfmpaintDelitem, VfmpaintFree, Vfmpaintsingl, Wd40DAta, Wd40Delitem, Wd40Free, Wd40singl, WernerDAta, WernerDelitem, WernerFree, Wernersingl, YelelockDAta, YelelockDelitem, YelelockFree, Yelelocksingl, tableauDAta, tableauDelitem, tableauFree, tableausingl, tricycleDAta, tricycleDelitem, tricycleFree, tricyclesingl } from "../Controller/Diy/Diygettingto.js";
import { BreadDAta, BreadDelitem, BreadFree, Breadsingl, CateringDAta, CateringDelitem, CateringFree, Cateringsingl, ChromeDAta, ChromeDelitem, ChromeFree, Chromesingl, CookwarDAta, CookwarDelitem, CookwarFree, Cookwarsingl, CulteryDAta, CulteryDelitem, CulteryFree, Culterysingl, KettlesDAta, KettlesDelitem, KettlesFree, Kettlessingl, KitechnaccDAta, KitechnaccDelitem, KitechnaccFree, Kitechnaccsingl, KitechnbinDAta, KitechnbinDelitem, KitechnbinFree, Kitechnbinsingl, KitechngaDAta, KitechngaDelitem, KitechngaFree, Kitechngasingl, KitechnkniDAta, KitechnkniDelitem, KitechnkniFree, Kitechnknisingl, PlastickitehenDAta, PlastickitehenDelitem, PlastickitehenFree, Plastickitehensingl, ScalekitehenDAta, ScalekitehenDelitem, ScalekitehenFree, Scalekitehensingl, SimplehumanDAta, SimplehumanDelitem, SimplehumanFree, Simplehumansingl, TeaDAta, TeaDelitem, TeaFree, Teasingl, TrayDAta, TrayDelitem, TrayFree, Traysingl, WaterDAta, WaterDelitem, WaterFree, Watersingl, WoodenDAta, WoodenDelitem, WoodenFree, Woodensingl } from "../Controller/Kitechenware/Kitechenweargetting.js";
import { CamingDAta, CamingDelitem, CamingFree, Camingsingl, GiftwareDAta, GiftwareDelitem, GiftwareFree, Giftwaresingl, GrowingDAta, GrowingDelitem, GrowingFree, Growingsingl, LighteningDAta, LighteningDelitem, LighteningFree, Lighteningsingl, PlantersDAta, PlantersDelitem, PlantersFree, Planterssingl, ToolsDAta, ToolsDelitem, ToolsFree, Toolssingl, WateringDAta, WateringDelitem, WateringFree, Wateringsingl, WinterfulesDAta, WinterfulesDelitem, WinterfulesFree, Winterfulessingl, fertilizerDAta, fertilizerDelitem, fertilizerFree, fertilizersingl, furniturDAta, furniturDelitem, furniturFree, furnitursingl } from "../Controller/Gardening/Gardeninggetting.js";
import { AfricaDAta, AfricaDelitem, AfricaFree, Africasingl, DordantDAta, DordantDelitem, DordantFree, Dordantsingl, GiftDAta, GiftDelitem, GiftFree, Giftsingl, HairDAta, HairDelitem, HairFree, Hairsingl, HandDAta, HandDelitem, HandFree, Handsingl, HealthDAta, HealthDelitem, HealthFree, Healthsingl, MouthDAta, MouthDelitem, MouthFree, Mouthsingl, PerfumesDAta, PerfumesDelitem, PerfumesFree, Perfumessingl, SanitaryDAta, SanitaryDelitem, SanitaryFree, Sanitarysingl, SavingDAta, SavingDelitem, SavingFree, Savingsingl, ShampoDAta, ShampoDelitem, ShampoFree, Shamposingl, ShowergelDAta, ShowergelDelitem, ShowergelFree, Showergelsingl, SkincareDAta, SkincareDelitem, SkincareFree, Skincaresingl, SoapbarDAta, SoapbarDelitem, SoapbarFree, Soapbarsingl, ToothbrushDAta, ToothbrushDelitem, ToothbrushFree, Toothbrushsingl, ToothpastDAta, ToothpastDelitem, ToothpastFree, Toothpastsingl } from "../Controller/Tolitries/Tolitriesgetting.js";
import { FathersdayDAta, FathersdayDelitem, FathersdayFree, Fathersdaysingl, FrammirrorDAta, FrammirrorDelitem, FrammirrorFree, Frammirrorsingl, GiftwarehDAta, GiftwarehDelitem, GiftwarehFree, Giftwarehsingl, IncenseDAta, IncenseDelitem, IncenseFree, Incensesingl, SouvenirsDAta, SouvenirsDelitem, SouvenirsFree, Souvenirssingl, WeddingDAta, WeddingDelitem, WeddingFree, Weddingsingl } from "../Controller/Home&decor/Homegetting.js";
import { DiariesDAta, DiariesDelitem, DiariesFree, Diariessingl, GarlandDAta, GarlandDelitem, GarlandFree, Garlandsingl, KidsDAta, KidsDelitem, KidsFree, Kidssingl, MailingDAta, MailingDelitem, MailingFree, Mailingsingl, OfficeDAta, OfficeDelitem, OfficeFree, Officesingl, SinglestemDAta, SinglestemDelitem, SinglestemFree, Singlestemsingl, WerathsDAta, WerathsDelitem, WerathsFree, Werathssingl } from "../Controller/Flowers/Flowergetting.js";
import { Singlestemproducts } from "../Controller/Flowers/Flowerpost.js";
import { CurtainsDAta, CurtainsDelitem, CurtainsFree, Curtainssingl, TablecoverDAta, TablecoverDelitem, TablecoverFree, Tablecoversingl, TeatowelDAta, TeatowelDelitem, TeatowelFree, Teatowelsingl, TowelsaccDAta, TowelsaccDelitem, TowelsaccFree, Towelsaccsingl } from "../Controller/Towelaccssories/Towelaccssoriesgetting.js";
import { HandwashDAta, HandwashDelitem, HandwashFree, Handwashsingl, HealthcareeDAta, HealthcareeDelitem, HealthcareeFree, Healthcareesingl, MelaminDAta, MelaminDelitem, MelaminFree, Melaminsingl, PlasticbathroomDAta, PlasticbathroomDelitem, PlasticbathroomFree, Plasticbathroomsingl, PlasticcabnitDAta, PlasticcabnitDelitem, PlasticcabnitFree, Plasticcabnitsingl } from "../Controller/PLastichousewear/Plasticgetting.js";
import { DrinkingglassDAta, DrinkingglassDelitem, DrinkingglassFree, Drinkingglasssingl, GlasstablewearDAta, GlasstablewearDelitem, GlasstablewearFree, Glasstablewearsingl, HomebakingDAta, HomebakingDelitem, HomebakingFree, Homebakingsingl, MetalbuckDAta, MetalbuckDelitem, MetalbuckFree, Metalbucksingl, MugcupsDAta, MugcupsDelitem, MugcupsFree, Mugcupssingl, StorageaccessoriesDAta, StorageaccessoriesDelitem, StorageaccessoriesFree, Storageaccessoriessingl } from "../Controller/China/Chinagetting.js";
import Glasstablewear from "../config/China/Glasstablewear.js";
import { CrokeryDAta, CrokeryDelitem, CrokeryFree, Crokerysingl, GlassdecoDAta, GlassdecoDelitem, GlassdecoFree, Glassdecosingl, HotwaterrDAta, HotwaterrDelitem, HotwaterrFree, Hotwaterrsingl, PicnicDAta, PicnicDelitem, PicnicFree, Picnicsingl, SportsbottDAta, SportsbottDelitem, SportsbottFree, Sportsbottsingl, Umbrella2DAta, Umbrella2Delitem, Umbrella2Free, Umbrella2singl, UmbrellaDAta, UmbrellaDelitem, UmbrellaFree, Umbrellasingl } from "../Controller/Hardware/Hardwaregetting.js";
import { GlassstorageDAta, GlassstorageDelitem, GlassstorageFree, Glassstoragesingl, GlasstablewareDAta, GlasstablewareDelitem, GlasstablewareFree, Glasstablewaresingl, GlasstumblerDAta, GlasstumblerDelitem, GlasstumblerFree, Glasstumblersingl, GlassvassDAta, GlassvassDelitem, GlassvassFree, Glassvasssingl, KlinerDAta, KlinerDelitem, KlinerFree, Klinersingl, PyrexDAta, PyrexDelitem, PyrexFree, Pyrexsingl } from "../Controller/Glassware/Glasswaregetting.js";
import { DoorbeelsDAta, DoorbeelsDelitem, DoorbeelsFree, Doorbeelssingl, EarephoneDAta, EarephoneDelitem, EarephoneFree, Earephonesingl, ElectricalaccDAta, ElectricalaccDelitem, ElectricalaccFree, Electricalaccsingl, HairbodyDAta, HairbodyDelitem, HairbodyFree, Hairbodysingl, IroneleDAta, IroneleDelitem, IroneleFree, Ironelesingl } from "../Controller/Electrical/Electricalgetting.js";
import { BirthdaybannaerDAta, BirthdaybannaerDelitem, BirthdaybannaerFree, Birthdaybannaersingl } from "../Controller/Partyware/Partywaregetting.js";

const router = express.Router()

router.get("/user", DAta)
router.get("/userlist", Cont)
router.delete('/deluser/:id' , delcont)
router.get("/freedelivery", Free)
router.delete("/userid/:id", Delitem)
router.get("/paletuser", PalletDAta)
router.get("/paletfreedelivery", PalletFree)
router.delete("/paletuserid/:id", PalletDelitem)
router.get('/palletsingle/:id' , palletsing)

router.get("/newuser", NewDAta)
router.get("/newfreedelivery", NewFree)
router.delete("/newuserid/:id", NewDelitem)
router.get('/newarrsingle/:id' , newsingle)

router.get("/fooduser", FoodDAta)
router.get("/foodfreedelivery", FoodFree)
router.delete("/fooduserid/:id", FoodDelitem)
router.get('/foodssingle/:id' , Foodssinglepage)

router.get("/driuser", DriDAta)
router.get("/drifreedelivery", DriFree)
router.delete("/driuserid/:id", DriDelitem)
router.get("/drifreedeliverysingle/:id", Drisingle)

router.get("/liguser", LighterDAta)
router.get("/lighfreedelivery", LighterFree)
router.delete("/lighuserid/:id", LighterDelitem)
router.get("/lightersingalepage/:id" ,Lightersingle)

router.get("/eleuser", ElectricalDAta)
router.get("/elefreedelivery", ElectricalFree)
router.delete("/eleuserid/:id", ElectricalDelitem)
router.get("/elefreedelivery/:id", Electricalsingle)

router.get("/Smokuser", SmokinDAta)
router.get("/Smokfreedelivery", SmokinFree)
router.delete("/Smokuserid/:id", SmokinDelitem)

router.get("/bathuser", BathDAta)
router.get("/bathfreedelivery", BathFree)
router.delete("/bathuserid/:id", BathDelitem)
router.get('/bathroomsingle/:id' , Bathromsingl)

router.get("/bathdeuser",BathdeDAta)
router.get("/bathdefreedelivery",BathdeFree)
router.delete("/bathdeuserid/:id",BathdeDelitem)
router.get('/bathroomdesingle/:id' ,Bathromdesingl)


router.get("/mirroruser",MirorDAta)
router.get("/mirrorfreedelivery",MirrorrFree)
router.delete("/mirroruserid/:id",MirrorDelitem)
router.get('/mirrorsingle/:id' ,Mirrorrsingl)

router.get("/showeruser",ShowerDAta)
router.get("/showerfreedelivery",ShowerFree)
router.delete("/showeruserid/:id",ShowerDelitem)
router.get('/showersingle/:id' ,Sowersingl)

router.get("/bathmatesuser",BathmatesDAta)
router.get("/bathmatesfreedelivery",BathmatesFree)
router.delete("/bathmatesuserid/:id",BathmatesDelitem)
router.get('/bathmatessingle/:id' ,Bathmatessingl)

router.get("/bathacessuser",BathacessDAta)
router.get("/bathacessfreedelivery",BathacessFree)
router.delete("/bathacessuserid/:id",BathacessDelitem)
router.get('/bathacesssingle/:id' ,Bathacesssingl)

router.get("/showheaduser",ShowheadDAta)
router.get("/showheadfreedelivery",ShowheadFree)
router.delete("/showheaduserid/:id",ShowheadDelitem)
router.get('/showheadsingle/:id' ,Showheadsingl)

router.get("/disposibleuser",DisposibleDAta)
router.get("/disposiblefreedelivery",DisposibleFree)
router.delete("/disposibleuserid/:id",DisposibleDelitem)
router.get('/disposiblesingle/:id' ,Disposiblesingl)

router.get("/Tablewearuser",TablewearDAta)
router.get("/Tablewearfreedelivery",TablewearFree)
router.delete("/Tablewearuserid/:id",TablewearDelitem)
router.get('/Tablewearsingle/:id' ,Tablewearsingl)

router.get("/Airersuser",AirersDAta)
router.get("/Airersfreedelivery",AirersFree)
router.delete("/Airersuserid/:id",AirersDelitem)
router.get('/Airerssingle/:id' ,Airerssingl)

router.get("/ironinguser",IroningDAta)
router.get("/ironingfreedelivery",IroningFree)
router.delete("/ironinguserid/:id",IroningDelitem)
router.get('/ironingsingle/:id' ,Ironingsingl)

router.get("/Loundryuser",LoundryDAta)
router.get("/Loundryfreedelivery",LoundryFree)
router.delete("/Loundryuserid/:id",LoundryDelitem)
router.get('/Loundrysingle/:id' ,Loundrysingl)

router.get("/Batteriesuser",BatteriesDAta)
router.get("/Batteriesfreedelivery",BatteriesFree)
router.delete("/Batteriesuserid/:id",BatteriesDelitem)
router.get('/Batteriessingle/:id' ,Batteriessingl)

router.get("/Phoneuser",PhoneDAta)
router.get("/Phonefreedelivery",PhoneFree)
router.delete("/Phoneuserid/:id",PhoneDelitem)
router.get('/Phonesingle/:id' ,Phonesingl)

router.get("/Obsticaluser",ObsticalDAta)
router.get("/Obsticalfreedelivery",ObsticalFree)
router.delete("/Obsticaluserid/:id",ObsticalDelitem)
router.get('/Obsticalsingle/:id' ,Obsticalsingl)

router.get("/Electricuser",ElectricDAta)
router.get("/Electricfreedelivery",ElectricFree)
router.delete("/Electricuserid/:id",ElectricDelitem)
router.get('/Electricsingle/:id' ,Electricsingl)

router.get("/Firstaiduser",FirstaidDAta)
router.get("/Firstaidfreedelivery",FirstaidFree)
router.delete("/Firstaiduserid/:id",FirstaidDelitem)
router.get('/Firstaidsingle/:id' ,Firstaidsingl)

router.get("/Apronsuser",ApronsDAta)
router.get("/Apronsfreedelivery",ApronsFree)
router.delete("/Apronsuserid/:id",ApronsDelitem)
router.get('/Apronssingle/:id' ,Apronssingl)

router.get("/Beddinguser",BeddingDAta)
router.get("/Beddingfreedelivery",BeddingFree)
router.delete("/Beddinguserid/:id",BeddingDelitem)
router.get('/Beddingsingle/:id' ,Beddingsingl)

router.get("/Clothinguser", ClothingDAta)
router.get("/Clothingfreedelivery",ClothingFree)
router.delete("/Clothinguserid/:id",ClothingDelitem)
router.get('/Clothingsingle/:id' ,Clothingsingl)

router.get("/Freshneruser", FreshnerDAta)
router.get("/Freshnerfreedelivery",FreshnerFree)
router.delete("/Freshneruserid/:id",FreshnerDelitem)
router.get('/Freshnersingle/:id' ,Freshnersingl)

router.get("/Akonoboluser", AkonobolDAta)
router.get("/Akonobolfreedelivery",AkonobolFree)
router.delete("/Akonoboluserid/:id",AkonobolDelitem)
router.get('/Akonobolsingle/:id' ,Akonobolsingl)

router.get("/Clockuser", ClockDAta)
router.get("/Clockfreedelivery",ClockFree)
router.delete("/Clockuserid/:id",ClockDelitem)
router.get('/Clocksingle/:id' ,Clocksingl)

router.get("/camerauser", CameraDAta)
router.get("/camerafreedelivery",CameraFree)
router.delete("/camerauserid/:id",CameraDelitem)
router.get('/camerasingle/:id' ,Camerasingl)

router.get("/digitaluser", DigitalDAta)
router.get("/digitalfreedelivery",DigitalFree)
router.delete("/digitaluserid/:id",DigitalDelitem)
router.get('/digitalsingle/:id' ,Digitalsingl)

router.get("/Cookwareuser", CookwareDAta)
router.get("/Cookwarefreedelivery",CookwareFree)
router.delete("/Cookwareuserid/:id",CookwareDelitem)
router.get('/Cookwaresingle/:id' ,Cookwaresingl)

router.get("/Crockeryuser", CrockeryDAta)
router.get("/Crockeryfreedelivery",CrockeryFree)
router.delete("/Crockeryuserid/:id",CrockeryDelitem)
router.get('/Crockerysingle/:id' ,Crockerysingl)

router.get("/Crockeryuser", CrockeryDAta)
router.get("/Crockeryfreedelivery",CrockeryFree)
router.delete("/Crockeryuserid/:id",CrockeryDelitem)
router.get('/Crockerysingle/:id' ,Crockerysingl)

router.get("/dinneruser", DinnerDAta)
router.get("/dinnerfreedelivery",DinnerFree)
router.delete("/dinneruserid/:id",DinnerDelitem)
router.get('/dinnersingle/:id' ,Dinnersingl)

router.get("/rentokiluser", RentokilDAta)
router.get("/rentokilfreedelivery",RentokilFree)
router.delete("/rentokiluserid/:id",RentokilDelitem)
router.get('/rentokilsingle/:id' ,Rentokilsingl)

router.get("/stvuser", StvDAta)
router.get("/stvfreedelivery",StvFree)
router.delete("/stvuserid/:id", StvDelitem)
router.get('/stvsingle/:id' ,Stvsingl)

router.get("/stvuser", StvDAta)
router.get("/stvfreedelivery",StvFree)
router.delete("/stvuserid/:id", StvDelitem)
router.get('/stvsingle/:id' ,Stvsingl)

router.get("/cottonuser", CottonDAta)
router.get("/cottonfreedelivery", CottonFree)
router.delete("/cottonuserid/:id", CottonDelitem)
router.get('/cottonsingle/:id' ,Cottonsingl)

router.get("/babyuser", BabyDAta)
router.get("/babyfreedelivery", BabyFree)
router.delete("/babyuserid/:id", BabyDelitem)
router.get('/babysingle/:id' ,Babysingl)

router.get("/freshnuser", FreshnDAta)
router.get("/freshnfreedelivery", FreshnFree)
router.delete("/freshnuserid/:id", FreshnDelitem)
router.get('/freshnsingle/:id' ,Freshnsingl)

router.get("/caruser", CarDAta)
router.get("/carfreedelivery", CarFree)
router.delete("/caruserid/:id", CarDelitem)
router.get('/carsingle/:id' ,Carsingl)

router.get("/bleechuser", BleechDAta)
router.get("/bleechfreedelivery", BleechFree)
router.delete("/bleechuserid/:id", BleechDelitem)
router.get('/bleechsingle/:id' ,Bleechsingl)

router.get("/bakewareuser", BakewareDAta)
router.get("/bakewarefreedelivery", BakewareFree)
router.delete("/bakewareuserid/:id", BakewareDelitem)
router.get('/bakewaresingle/:id' , Bakewaresingl)

router.get("/barewareuser", BarewareDAta)
router.get("/barewarefreedelivery", BarewareFree)
router.delete("/barewareuserid/:id", BarewareDelitem)
router.get('/barewaresingle/:id' , Barewaresingl)

router.get("/birdsuser", BirdsDAta)
router.get("/birdsfreedelivery", BirdsFree)
router.delete("/birdsuserid/:id", BirdsDelitem)
router.get('/birdssingle/:id' , Birdssingl)

router.get("/catuser", CatDAta)
router.get("/catfreedelivery", CatFree)
router.delete("/catuserid/:id", CatDelitem)
router.get('/catsingle/:id' , Catsingl)

router.get("/babeyuser", BabeyDAta)
router.get("/babeyfreedelivery", BabeyFree)
router.delete("/babeyuserid/:id", BabeyDelitem)
router.get('/babeysingle/:id' , Babeysingl)

router.get("/kidsuser", KidssDAta)
router.get("/kidsfreedelivery", KidssFree)
router.delete("/kidsuserid/:id",KidssDelitem)
router.get('/kidssingle/:id' , Kidsssingl)

router.get("/bbquser", BBqDAta)
router.get("/bbqfreedelivery", BBqFree)
router.delete("/bbquserid/:id",BBqDelitem)
router.get('/bbqsingle/:id' , BBqsingl)

router.get("/birdcareuser", BirdcareDAta)
router.get("/birdcarefreedelivery", BirdcareFree)
router.delete("/birdcareuserid/:id",BirdcareDelitem)
router.get('/birdcaresingle/:id' , Birdcaresingl)

router.get("/baloonuser", BaloonDAta)
router.get("/baloonfreedelivery", BaloonFree)
router.delete("/baloonuserid/:id",BaloonDelitem)
router.get('/baloonsingle/:id' , Baloonsingl)

router.get("/pumpsuser", PumpsDAta)
router.get("/pumpsfreedelivery", PumpsFree)
router.delete("/pumpsuserid/:id", PumpsDelitem)
router.get('/pumpssingle/:id' , Pumpssingl)

router.get("/banneruser", BannerDAta)
router.get("/bannerfreedelivery", BannerFree)
router.delete("/banneruserid/:id", BannerDelitem)
router.get('/bannersingle/:id' , Bannersingl)

router.get("/crystaluser", CrystalDAta)
router.get("/crystalfreedelivery", CrystalFree)
router.delete("/crystaluserid/:id", CrystalDelitem)
router.get('/crystalsingle/:id' , Crystalsingl)

router.get("/cakesuser", CakesDAta)
router.get("/cakesfreedelivery", CakesFree)
router.delete("/cakesuserid/:id", CakesDelitem)
router.get('/cakessingle/:id' , Cakessingl)

router.get("/furnitureuser", FurnitureDAta)
router.get("/furniturefreedelivery", FurnitureFree)
router.delete("/furnitureuserid/:id", FurnitureDelitem)
router.get('/furnituresingle/:id' , Furnituresingl)

router.get("/matesuser", MatesDAta)
router.get("/matesfreedelivery", MatesFree)
router.delete("/matesuserid/:id", MatesDelitem)
router.get('/matessingle/:id' , Matessingl)

router.get("/candeluser", CandelDAta)
router.get("/candelfreedelivery", CandelFree)
router.delete("/candeluserid/:id", CandelDelitem)
router.get('/candelsingle/:id' , Candelsingl)

router.get("/stuser", STDAta)
router.get("/stfreedelivery", STFree)
router.delete("/stuserid/:id", STDelitem)
router.get('/stsingle/:id' , STsingl)

router.get("/stuser", STDAta)
router.get("/stfreedelivery", STFree)
router.delete("/stuserid/:id", STDelitem)
router.get('/stsingle/:id' , STsingl)

router.get("/foodconuser", FoodconDAta)
router.get("/foodconfreedelivery", FoodconFree)
router.delete("/foodconuserid/:id", FoodconDelitem)
router.get('/foodconsingle/:id' , Foodconsingl)

router.get("/kidsplasuser", kidsplasDAta)
router.get("/kidsplasfreedelivery",kidsplasFree)
router.delete("/kidsplasuserid/:id", kidsplasDelitem)
router.get('/kidsplassingle/:id' , kidsplassingl)

router.get("/sportuser", SportsDAta)
router.get("/sportfreedelivery",SportsFree)
router.delete("/sportuserid/:id", SportsDelitem)
router.get('/sportsingle/:id' , Sportssingl)

router.get("/flaskuser", FlaskDAta)
router.get("/flaskfreedelivery",FlaskFree)
router.delete("/flaskuserid/:id", FlaskDelitem)
router.get('/flasksingle/:id' , Flasksingl)

router.get("/artcraftuser", ArtcraftDAta)
router.get("/artcraftfreedelivery",ArtcraftFree)
router.delete("/artcraftuserid/:id", ArtcraftDelitem)
router.get('/artcraftsingle/:id' , Artcraftsingl)

router.get("/booksuser", BooksDAta)
router.get("/booksfreedelivery",BooksFree)
router.delete("/booksuserid/:id", BooksDelitem)
router.get('/bookssingle/:id' , Bookssingl)

router.get("/brushwareuser", BrushwareDAta)
router.get("/brushwarefreedelivery",BrushwareFree)
router.delete("/brushwareuserid/:id", BrushwareDelitem)
router.get('/brushwaresingle/:id' , Brushwaresingl)

router.get("/dusteruser", DusterDAta)
router.get("/dusterfreedelivery",DusterFree)
router.delete("/dusteruserid/:id", DusterDelitem)
router.get('/dustersingle/:id' , Dustersingl)

router.get("/artificaluser", ArtificalDAta)
router.get("/artificalfreedelivery",ArtificalFree)
router.delete("/artificaluserid/:id", ArtificalDelitem)
router.get('/artificalsingle/:id' , Artificalsingl)

router.get("/diytoolsuser", DiytoolsDAta)
router.get("/diytoolsfreedelivery",DiytoolsFree)
router.delete("/diytoolsuserid/:id", DiytoolsDelitem)
router.get('/diytoolssingle/:id' , Diytoolssingl)

router.get("/bouquetuser", BouquetsDAta)
router.get("/bouquetfreedelivery",BouquetsFree)
router.delete("/bouquetuserid/:id", BouquetsDelitem)
router.get('/bouquetsingle/:id' , Bouquetssingl)

router.get("/disposibluser", DisposiblDAta )
router.get("/disposiblfreedelivery",DisposiblFree)
router.delete("/disposibluserid/:id", DisposiblDelitem)
router.get('/disposiblsingle/:id' , Disposiblsingl)

router.get("/craftuser", CraftpoDAta )
router.get("/craftfreedelivery", CraftpoFree)
router.delete("/craftuserid/:id", CraftpoDelitem)
router.get('/craftsingle/:id' , Craftposingl)

router.get("/carpouser", CarpoDAta )
router.get("/carpofreedelivery", CarpoFree)
router.delete("/carpouserid/:id", CarDelitem)
router.get('/carposingle/:id' , Carposingl)

router.get("/candelesuser", CandelesDAta )
router.get("/candelesfreedelivery", CandelesFree)
router.delete("/candelesuserid/:id", CandelesFree)
router.get('/candelessingle/:id' , Candelessingl)

router.get("/foodpouser", FoodpoDAta )
router.get("/foodpofreedelivery", FoodpoFree)
router.delete("/foodpouserid/:id", FoodpoDelitem)
router.get('/foodposingle/:id' , Foodposingl)

router.get("/shoeuser", ShoeDAta )
router.get("/shoefreedelivery", ShoeFree)
router.delete("/shoeuserid/:id", ShoeDelitem)
router.get('/shoesingle/:id' , Shoesingl)

router.get("/stationuser", StationeyDAta )
router.get("/stationfreedelivery", StationeyFree)
router.delete("/stationuserid/:id", StationeyDelitem)
router.get('/stationsingle/:id' , Stationeysingl)

router.get("/potoyuser", PotoyDAta )
router.get("/potoyfreedelivery", PotoyFree)
router.delete("/potoyuserid/:id", PotoyDelitem)
router.get('/potoysingle/:id' , Potoysingl)

router.get("/pestconuser", PestconDAta )
router.get("/pestconfreedelivery", PestconFree)
router.delete("/pestconuserid/:id", PestconDelitem)
router.get('/pestconsingle/:id' , Pestconsingl)

router.get("/lightergasuser", LightergasDAta )
router.get("/lightergasfreedelivery", LightergasFree)
router.delete("/lightergasuserid/:id", LightergasDelitem)
router.get('/lightergassingle/:id' , Lightergassingl)

router.get("/londryironuser", LoundryironDAta )
router.get("/londryironfreedelivery", LoundryironFree)
router.delete("/londryironuserid/:id", LoundryironDelitem)
router.get('/londryironsingle/:id' , Loundryironsingl)

router.get("/kitchenpounduser", KitchenwearpDAta )
router.get("/kitchenpoundfreedelivery", KitchenwearpFree)
router.delete("/kitchenpounduserid/:id", KitchenwearpDelitem)
router.get('/kitchenpoundsingle/:id' , Kitchenwearpsingl)

router.get("/hoiserypuser", HoiseryDAta )
router.get("/hoiserypfreedelivery", HoiseryFree)
router.delete("/hoiserypuserid/:id", HoiseryDelitem)
router.get('/hoiserypsingle/:id' , Hoiserysingl)

router.get("/householcluser", HouseholdclDAta )
router.get("/householclfreedelivery", HouseholdclFree)
router.delete("/householcluserid/:id", HouseholdclDelitem)
router.get('/householclsingle/:id' , Householdclsingl)

router.get("/householdpruser", HouseholdprDAta )
router.get("/householdprfreedelivery", HouseholdprFree)
router.delete("/householdpruserid/:id", HouseholdprDelitem)
router.get('/householdprsingle/:id' , Householdprsingl)

router.get("/readinguser", ReadingDAta )
router.get("/readingfreedelivery", ReadingFree)
router.delete("/readinguserid/:id", ReadingDelitem)
router.get('/readingsingle/:id' , Readingsingl)

router.get("/glovesuser", GlovesDAta )
router.get("/glovesfreedelivery", GlovesFree)
router.delete("/glovesuserid/:id", GlovesDelitem)
router.get('/glovessingle/:id' , Glovessingl)

router.get("/mopsuser", MopsDAta )
router.get("/mopsfreedelivery", MopsFree)
router.delete("/mopsuserid/:id", MopsDelitem)
router.get('/mopssingle/:id' , Mopssingl)

router.get("/spongeuser", SpongeDAta )
router.get("/spongefreedelivery", SpongeFree)
router.delete("/spongeuserid/:id", SpongeDelitem)
router.get('/spongesingle/:id' , Spongesingl)

router.get("/bagsluser", BagslDAta)
router.get("/bagslfreedelivery", BagslFree)
router.delete("/bagsluserid/:id", BagslDelitem)
router.get('/bagslsingle/:id' , Bagslsingl)

router.get("/barrientuser", BarrientDAta )
router.get("/barrientfreedelivery", BarrientFree)
router.delete("/barrientuserid/:id", BarrientDelitem)
router.get('/barrientsingle/:id' , Barrientsingl)

router.get("/barrientuser", BarrientDAta )
router.get("/barrientfreedelivery", BarrientFree)
router.delete("/barrientuserid/:id", BarrientDelitem)
router.get('/barrientsingle/:id' , Barrientsingl)

router.get("/bartolinuser", BartolinDAta )
router.get("/bartolinfreedelivery", BartolinFree)
router.delete("/bartolinuserid/:id", BartolinDelitem)
router.get('/bartolinsingle/:id' , Bartolinsingl)

router.get("/birdbranduser", BirdbrandDAta )
router.get("/birdbrandfreedelivery", BirbrandFree)
router.delete("/birdbranduserid/:id", BirdbrandDelitem)
router.get('/birdbrandsingle/:id' , Birdbrandsingl)

router.get("/blackuser", BlackDAta )
router.get("/blackfreedelivery", BlackFree)
router.delete("/blackuserid/:id", BlackDelitem)
router.get('/blacksingle/:id' , Blacksingl)

router.get("/bonituser", BonitDAta )
router.get("/bonitfreedelivery", BonitFree)
router.delete("/bonituserid/:id", BonitDelitem)
router.get('/bonitsingle/:id' , Bonitsingl)

router.get("/bascktuser", BasketstDAta )
router.get("/bascktfreedelivery", BasketstFree)
router.delete("/bascktuserid/:id", BasketstDelitem)
router.get('/bascktsingle/:id' , Basketstsingl)

router.get("/luggageuser", LuggageDAta )
router.get("/luggagefreedelivery", LuggageFree)
router.delete("/luggageuserid/:id", LuggageDelitem)
router.get('/luggagesingle/:id' , Luggagesingl)

router.get("/bostikuser", BostikDAta )
router.get("/bostikfreedelivery", BostikFree)
router.delete("/bostikuserid/:id", BostikDelitem)
router.get('/bostiksingle/:id' , Bostiksingl)

router.get("/briwaxuser", BriwaxDAta )
router.get("/briwaxfreedelivery", BriwaxFree)
router.delete("/briwaxuserid/:id", BriwaxDelitem)
router.get('/briwaxsingle/:id' , Briwaxsingl)

router.get("/brookuser", BrookDAta )
router.get("/brookfreedelivery", BrookFree)
router.delete("/brookuserid/:id", BrookDelitem)
router.get('/brooksingle/:id' , Brooksingl)

router.get("/carprouser", CarproDAta )
router.get("/carprofreedelivery", CarproFree)
router.delete("/carprouserid/:id", CarproDelitem)
router.get('/carprosingle/:id' , Carprosingl)

router.get("/carplanuser", CarplanDAta )
router.get("/carplanfreedelivery", CarplanFree)
router.delete("/carplanuserid/:id", CarplanDelitem)
router.get('/carplansingle/:id' , Carplansingl)

router.get("/chomisuser", ChomisDAta )
router.get("/chomisfreedelivery", ChomisFree)
router.delete("/chomisuserid/:id", ChomisDelitem)
router.get('/chomissingle/:id' , Chomissingl)

router.get("/commanduser", CommandDAta )
router.get("/commandfreedelivery", CommandFree)
router.delete("/commanduserid/:id", CommandDelitem)
router.get('/commandsingle/:id' , Commandsingl)

router.get("/coraluser", CoralDAta )
router.get("/coralfreedelivery", CoralFree)
router.delete("/coraluserid/:id", CoralDelitem)
router.get('/coralsingle/:id' , Coralsingl)

router.get("/crownuser", CrownDAta )
router.get("/crownfreedelivery", CrownFree)
router.delete("/crownuserid/:id", CrownDelitem)
router.get('/crownsingle/:id' , Crownsingl)

router.get("/dektonuser", DektonDAta )
router.get("/dektonfreedelivery", DektonFree)
router.delete("/dektonuserid/:id", DektonDelitem)
router.get('/dektonsingle/:id' , Dektonsingl)

router.get("/demsumuser", DemsumDAta )
router.get("/demsumfreedelivery", DemsumFree)
router.delete("/demsumuserid/:id", DemsumDelitem)
router.get('/demsumsingle/:id' , Demsumsingl)

router.get("/darperuser", DarperDAta )
router.get("/darperfreedelivery", DarperFree)
router.delete("/darperuserid/:id", DarperDelitem)
router.get('/darpersingle/:id' , Darpersingl)

router.get("/edcouser", EdcoDAta )
router.get("/edcofreedelivery", EdcoFree)
router.delete("/edcouserid/:id", EdcoDelitem)
router.get('/edcosingle/:id' , Edcosingl)

router.get("/everuser", EverDAta )
router.get("/everfreedelivery", EverFree)
router.delete("/everuserid/:id", EverDelitem)
router.get('/eversingle/:id' , Eversingl)

router.get("/exitexuser", ExitexDAta )
router.get("/exitexfreedelivery", ExitexFree)
router.delete("/exitexuserid/:id", ExitexDelitem)
router.get('/exitexsingle/:id' , Exitexsingl)

router.get("/exitexuser", ExitexDAta )
router.get("/exitexfreedelivery", ExitexFree)
router.delete("/exitexuserid/:id", ExitexDelitem)
router.get('/exitexsingle/:id' , Exitexsingl)

router.get("/fituser", FitDAta )
router.get("/fitfreedelivery", FitFree)
router.delete("/fituserid/:id", FitDelitem)
router.get('/fitsingle/:id' , Fitsingl)

router.get("/globaluser", GlobalDAta )
router.get("/globalfreedelivery", GlobalFree)
router.delete("/globaluserid/:id", GlobalDelitem)
router.get('/globalsingle/:id' , Globalsingl)

router.get("/gassysuser", GasDAta )
router.get("/gassysfreedelivery", GasFree)
router.delete("/gassysuserid/:id", GasDelitem)
router.get('/gassyssingle/:id' , Gassingl)

router.get("/gorilauser", GorilaDAta )
router.get("/gorilafreedelivery", GorilaFree)
router.delete("/gorilauserid/:id", GorilaDelitem)
router.get('/gorilasingle/:id' , Gorilasingl)

router.get("/hagsenuser", HagesanDAta )
router.get("/hagsenfreedelivery", HagesanFree)
router.delete("/hagsenuserid/:id", HagesanDelitem)
router.get('/hagsensingle/:id' , Hagesansingl)

router.get("/hardwareuser", HardwareDAta )
router.get("/hardwarefreedelivery", HardwareFree)
router.delete("/hardwareuserid/:id", HardwareDelitem)
router.get('/hardwaresingle/:id' , Hardwaresingl)

router.get("/harrisuser", HarrisDAta )
router.get("/harrisfreedelivery", HarrisFree)
router.delete("/harrisuserid/:id", HarrisDelitem)
router.get('/harrissingle/:id' , Harrissingl)

router.get("/hilkauser", HilkaAta )
router.get("/hilkafreedelivery", HilkaFree)
router.delete("/hilkauserid/:id", HilkaDelitem)
router.get('/hilkasingle/:id' , Hilkasingl)

router.get("/humnroluser", HumnrolDAta )
router.get("/humnrolfreedelivery", HumnrolFree)
router.delete("/humnroluserid/:id", HumnrolDelitem)
router.get('/humnrolsingle/:id' , Humnrolsingl)

router.get("/jbweluser", JbwelDAta )
router.get("/jbwelfreedelivery", JbwelFree)
router.delete("/jbweluserid/:id", JbwelDelitem)
router.get('/jbwelsingle/:id' , Jbwelsingl)

router.get("/kilrockuser", KilrockDAta )
router.get("/kilrockfreedelivery", KilrockFree)
router.delete("/kilrockuserid/:id", KilrockDelitem)
router.get('/kilrocksingle/:id' , Kilrocksingl)

router.get("/ladderuser", LadderDAta )
router.get("/ladderfreedelivery", LadderFree)
router.delete("/ladderuserid/:id", LadderDelitem)
router.get('/laddersingle/:id' , Laddersingl)

router.get("/locktileuser", LocktileDAta )
router.get("/locktilefreedelivery", LocktileFree)
router.delete("/locktileuserid/:id", LocktileDelitem)
router.get('/locktilesingle/:id' , Locktilesingl)

router.get("/lynwooduser", LynwoodDAta )
router.get("/lynwoodfreedelivery", LynwoodFree)
router.delete("/lynwooduserid/:id", LynwoodDelitem)
router.get('/lynwoodsingle/:id' , Lynwoodsingl)

router.get("/oxforduser", OxfordDAta )
router.get("/oxfordfreedelivery", OxfordFree)
router.delete("/oxforduserid/:id", OxfordDelitem)
router.get('/oxfordsingle/:id' , Oxfordsingl)

router.get("/pestcouser", PestcoDAta )
router.get("/pestcofreedelivery", PestcoFree)
router.delete("/pestcouserid/:id", PestcoDelitem)
router.get('/pestcosingle/:id' , Pestcontsingl)

router.get("/plaspluguser", PlasplugDAta )
router.get("/plasplugfreedelivery", PlasplugFree)
router.delete("/plaspluguserid/:id", PlasplugDelitem)
router.get('/plasplugsingle/:id' , Plasplugsingl)

router.get("/primacaruser", PrimacarDAta )
router.get("/primacarfreedelivery", PrimacarFree)
router.delete("/primacaruserid/:id", PrimacarDelitem)
router.get('/primacarsingle/:id' , Primacarsingl)

router.get("/rolsonuser", RolsonDAta )
router.get("/rolsonfreedelivery", RolsonFree)
router.delete("/rolsonuserid/:id", RolsonDelitem)
router.get('/rolsonsingle/:id' , Rolsonsingl)

router.get("/ronsealuser", RonsealDAta )
router.get("/ronsealfreedelivery", RonsealFree)
router.delete("/ronsealuserid/:id", RonsealDelitem)
router.get('/ronsealsingle/:id' , Ronsealsingl)

router.get("/rustinsuser", RustinsDAta )
router.get("/rustinsfreedelivery", RustinsFree)
router.delete("/rustinsuserid/:id", RustinsDelitem)
router.get('/rustinssingle/:id' , Rustinssingl)

router.get("/securituser", SecuritDAta )
router.get("/securitfreedelivery", SecuritFree)
router.delete("/securituserid/:id", SecuritDelitem)
router.get('/securitsingle/:id' , Securitsingl)

router.get("/secupuser", SecrupDAta )
router.get("/secupfreedelivery", SecrupFree)
router.delete("/secupuserid/:id", SecrupDelitem)
router.get('/secupsingle/:id' , Secrupsingl)

router.get("/shortageuser", ShortageDAta )
router.get("/shortagefreedelivery", ShortageFree)
router.delete("/shortageuserid/:id", ShortageDelitem)
router.get('/shortagesingle/:id' , Shortagesingl)

router.get("/soudaluser", SoudalDAta )
router.get("/soudalfreedelivery", SoudalFree)
router.delete("/soudaluserid/:id", SoudalDelitem)
router.get('/soudalsingle/:id' , Soudalsingl)

router.get("/starpackuser", StarpackDAta )
router.get("/starpackfreedelivery", StarpackFree)
router.delete("/starpackuserid/:id", StarpackDelitem)
router.get('/starpacksingle/:id' , Starpacksingl)

router.get("/sterlinguser", SterlingDAta )
router.get("/sterlingfreedelivery", SterlingFree)
router.delete("/sterlinguserid/:id", SterlingDelitem)
router.get('/sterlingsingle/:id' , Sterlingsingl)

router.get("/tableauuser", tableauDAta )
router.get("/tableaufreedelivery", tableauFree)
router.delete("/tableauuserid/:id", tableauDelitem)
router.get('/tableausingle/:id' , tableausingl)

router.get("/tricycleuser", tricycleDAta )
router.get("/tricyclefreedelivery", tricycleFree)
router.delete("/tricycleuserid/:id", tricycleDelitem)
router.get('/tricyclesingle/:id' , tricyclesingl)

router.get("/ultratapeuser", UltratapeDAta )
router.get("/ultratapefreedelivery", UltratapeFree)
router.delete("/ultratapeuserid/:id", UltratapeDelitem)
router.get('/ultratapesingle/:id' , Ultratapesingl)

router.get("/vacuumuser", VacuumDAta )
router.get("/vacuumfreedelivery", VacuumFree)
router.delete("/vacuumuserid/:id", VacuumDelitem)
router.get('/vacuumsingle/:id' , Vacuumsingl)

router.get("/velcrouser", VelcroDAta )
router.get("/velcrofreedelivery", VelcroFree)
router.delete("/velcrouserid/:id", VelcroDelitem)
router.get('/velcrosingle/:id' , Velcrosingl)

router.get("/vfmpaintuser", VfmpaintDAta )
router.get("/vfmpaintfreedelivery", VfmpaintFree)
router.delete("/vfmpaintuserid/:id", VfmpaintDelitem)
router.get('/vfmpaintsingle/:id' , Vfmpaintsingl)

router.get("/wd40user", Wd40DAta )
router.get("/wd40freedelivery", Wd40Free)
router.delete("/wd40userid/:id", Wd40Delitem)
router.get('/wd40single/:id' , Wd40singl)

router.get("/werneruser", WernerDAta )
router.get("/wernerfreedelivery", WernerFree)
router.delete("/werneruserid/:id", WernerDelitem)
router.get('/wernersingle/:id' , Wernersingl)

router.get("/yelelockuser", YelelockDAta )
router.get("/yelelockfreedelivery", YelelockFree)
router.delete("/yelelockuserid/:id", YelelockDelitem)
router.get('/yelelocksingle/:id' , Yelelocksingl)

router.get("/uniconuser", UniconDAta )
router.get("/uniconfreedelivery", UniconFree)
router.delete("/uniconuserid/:id", UniconDelitem)
router.get('/uniconsingle/:id' , Uniconsingl)

router.get("/amtechuser", AmtechDAta )
router.get("/amtechfreedelivery", AmtechFree)
router.delete("/amtechuserid/:id", AmtechDelitem)
router.get('/amtechsingle/:id' , Amtechsingl)

router.get("/antiquxuser", AntiquxDAta )
router.get("/antiquxfreedelivery", AntiquxFree)
router.delete("/antiquxuserid/:id", AntiquxDelitem)
router.get('/antiquxsingle/:id' , Antiquxsingl)

router.get("/chromuser", ChromeDAta )
router.get("/chromfreedelivery", ChromeFree)
router.delete("/chromuserid/:id", ChromeDelitem)
router.get('/chromsingle/:id' , Chromesingl)

router.get("/cookwaruser", CookwarDAta )
router.get("/cookwarfreedelivery", CookwarFree)
router.delete("/cookwaruserid/:id", CookwarDelitem)
router.get('/cookwarsingle/:id' , Cookwarsingl)

router.get("/kettlesuser", KettlesDAta )
router.get("/kettlesfreedelivery", KettlesFree)
router.delete("/kettlesuserid/:id", KettlesDelitem)
router.get('/kettlessingle/:id' , Kettlessingl)

router.get("/culteryuser", CulteryDAta )
router.get("/culteryfreedelivery", CulteryFree)
router.delete("/culteryuserid/:id", CulteryDelitem)
router.get('/culterysingle/:id' , Culterysingl)

router.get("/kitechenaccuser", KitechnaccDAta )
router.get("/kitechenaccfreedelivery", KitechnaccFree)
router.delete("/kitechenaccuserid/:id", KitechnaccDelitem)
router.get('/kitechenaccsingle/:id' , Kitechnaccsingl)

router.get("/kitechenbinuser", KitechnbinDAta )
router.get("/kitechenbinfreedelivery", KitechnbinFree)
router.delete("/kitechenbinuserid/:id", KitechnbinDelitem)
router.get('/kitechenbinsingle/:id' , Kitechnbinsingl)

router.get("/kitechengauser", KitechngaDAta )
router.get("/kitechengafreedelivery", KitechngaFree)
router.delete("/kitechengauserid/:id", KitechngaDelitem)
router.get('/kitechengasingle/:id' , Kitechngasingl)

router.get("/kitechenkniuser", KitechnkniDAta )
router.get("/kitechenknifreedelivery",KitechnkniFree)
router.delete("/kitechenkniuserid/:id", KitechnkniDelitem)
router.get('/kitechenknisingle/:id' , Kitechnknisingl)

router.get("/scaleuser", ScalekitehenDAta )
router.get("/scalefreedelivery",ScalekitehenFree)
router.delete("/scaleuserid/:id", ScalekitehenDelitem)
router.get('/scalesingle/:id' , Scalekitehensingl)

router.get("/plastickitechenuser", PlastickitehenDAta )
router.get("/plastickitechenfreedelivery",PlastickitehenFree)
router.delete("/plastickitechenuserid/:id", PlastickitehenDelitem)
router.get('/plastickitechensingle/:id' , Plastickitehensingl)

router.get("/simplehumanuser", SimplehumanDAta )
router.get("/simplehumanfreedelivery",SimplehumanFree)
router.delete("/simplehumanuserid/:id", SimplehumanDelitem)
router.get('/simplehumansingle/:id' , Simplehumansingl)

router.get("/breaduser", BreadDAta )
router.get("/breadfreedelivery",BreadFree)
router.delete("/breaduserid/:id", BreadDelitem)
router.get('/breadsingle/:id' , Breadsingl)

router.get("/teauser", TeaDAta )
router.get("/teafreedelivery",TeaFree)
router.delete("/teauserid/:id", TeaDelitem)
router.get('/teasingle/:id' , Teasingl)

router.get("/trayuser", TrayDAta )
router.get("/trayfreedelivery",TrayFree)
router.delete("/trayuserid/:id", TrayDelitem)
router.get('/traysingle/:id' , Traysingl)

router.get("/wateruser", WaterDAta )
router.get("/waterfreedelivery",WaterFree)
router.delete("/wateruserid/:id", WaterDelitem)
router.get('/watersingle/:id' , Watersingl)

router.get("/woodenuser", WoodenDAta )
router.get("/woodenfreedelivery",WoodenFree)
router.delete("/woodenuserid/:id", WoodenDelitem)
router.get('/woodensingle/:id' , Woodensingl)

router.get("/cateringuser", CateringDAta )
router.get("/cateringfreedelivery",CateringFree)
router.delete("/cateringuserid/:id", CateringDelitem)
router.get('/cateringsingle/:id' , Cateringsingl)

router.get("/campinguser", CamingDAta )
router.get("/campingfreedelivery",CamingFree)
router.delete("/campinguserid/:id", CamingDelitem)
router.get('/campingsingle/:id' , Camingsingl)

router.get("/fertilizeruser", fertilizerDAta )
router.get("/fertilizerfreedelivery",fertilizerFree)
router.delete("/fertilizeruserid/:id", fertilizerDelitem)
router.get('/fertilizersingle/:id' , fertilizersingl)

router.get("/furnituruser", furniturDAta )
router.get("/furniturfreedelivery",furniturFree)
router.delete("/furnituruserid/:id", furniturDelitem)
router.get('/furnitursingle/:id' , furnitursingl)

router.get("/giftwareuser", GiftwareDAta )
router.get("/giftwarefreedelivery",GiftwareFree)
router.delete("/giftwareuserid/:id", GiftwareDelitem)
router.get('/giftwaresingle/:id' , Giftwaresingl)

router.get("/growinguser", GrowingDAta )
router.get("/growingfreedelivery",GrowingFree)
router.delete("/growinguserid/:id", GrowingDelitem)
router.get('/growingsingle/:id' , Growingsingl)

router.get("/lighteninguser", LighteningDAta )
router.get("/lighteningfreedelivery",LighteningFree)
router.delete("/lighteninguserid/:id", LighteningDelitem)
router.get('/lighteningsingle/:id' , Lighteningsingl)

router.get("/plantersuser", PlantersDAta )
router.get("/plantersfreedelivery",PlantersFree)
router.delete("/plantersuserid/:id", PlantersDelitem)
router.get('/planterssingle/:id' , Planterssingl)

router.get("/toolsuser", ToolsDAta )
router.get("/toolsfreedelivery",ToolsFree)
router.delete("/toolsuserid/:id", ToolsDelitem)
router.get('/toolssingle/:id' , Toolssingl)

router.get("/wateringuser", WateringDAta )
router.get("/wateringfreedelivery",WateringFree)
router.delete("/wateringuserid/:id", WateringDelitem)
router.get('/wateringsingle/:id' , Wateringsingl)

router.get("/winterfulesuser", WinterfulesDAta )
router.get("/winterfulesfreedelivery",WinterfulesFree)
router.delete("/winterfulesuserid/:id", WinterfulesDelitem)
router.get('/winterfulessingle/:id' , Winterfulessingl)

router.get("/giftuser", GiftDAta )
router.get("/giftfreedelivery",GiftFree)
router.delete("/giftuserid/:id", GiftDelitem)
router.get('/giftsingle/:id' , Giftsingl)

router.get("/hairuser", HairDAta )
router.get("/hairfreedelivery",HairFree)
router.delete("/hairuserid/:id", HairDelitem)
router.get('/hairsingle/:id' , Hairsingl)

router.get("/handuser", HandDAta )
router.get("/handfreedelivery",HandFree)
router.delete("/handuserid/:id", HandDelitem)
router.get('/handsingle/:id' , Handsingl)

router.get("/healthuser", HealthDAta )
router.get("/healthfreedelivery",HealthFree)
router.delete("/healthuserid/:id", HealthDelitem)
router.get('/healthsingle/:id' , Healthsingl)

router.get("/mouthuser", MouthDAta )
router.get("/mouthfreedelivery",MouthFree)
router.delete("/mouthuserid/:id", MouthDelitem)
router.get('/mouthsingle/:id' , Mouthsingl)

router.get("/perfumeuser", PerfumesDAta )
router.get("/perfumefreedelivery",PerfumesFree)
router.delete("/perfumeuserid/:id",PerfumesDelitem )
router.get('/perfumesingle/:id' , Perfumessingl)

router.get("/sanitaryuser", SanitaryDAta )
router.get("/sanitaryfreedelivery",SanitaryFree)
router.delete("/sanitaryuserid/:id", SanitaryDelitem)
router.get('/sanitarysingle/:id' , Sanitarysingl)

router.get("/savinguser", SavingDAta )
router.get("/savingfreedelivery",SavingFree)
router.delete("/savinguserid/:id", SavingDelitem)
router.get('/savingsingle/:id' , Savingsingl)

router.get("/shampouser", ShampoDAta )
router.get("/shampofreedelivery",ShampoFree)
router.delete("/shampouserid/:id", ShampoDelitem)
router.get('/shamposingle/:id' , Shamposingl)

router.get("/skincareuser", SkincareDAta )
router.get("/skincarefreedelivery",SkincareFree)
router.delete("/skincareuserid/:id", SkincareDelitem)
router.get('/skincaresingle/:id' , Skincaresingl)

router.get("/showergeluser", ShowergelDAta)
router.get("/showergelfreedelivery", ShowergelFree)
router.delete("/showergeluserid/:id", ShowergelDelitem)
router.get('/showergelsingle/:id' , Showergelsingl)

router.get("/soapbaruser", SoapbarDAta)
router.get("/soapbarfreedelivery", SoapbarFree)
router.delete("/soapbaruserid/:id", SoapbarDelitem)
router.get('/soapbarsingle/:id' , Soapbarsingl)

router.get("/toothbrushuser", ToothbrushDAta)
router.get("/toothbrushfreedelivery", ToothbrushFree)
router.delete("/toothbrushuserid/:id", ToothbrushDelitem)
router.get('/toothbrushsingle/:id' , Toothbrushsingl)

router.get("/toothpastuser", ToothpastDAta)
router.get("/toothpastfreedelivery", ToothpastFree)
router.delete("/toothpastuserid/:id", ToothpastDelitem)
router.get('/toothpastsingle/:id' , Toothpastsingl)

router.get("/dordantuser", DordantDAta)
router.get("/dordantfreedelivery", DordantFree)
router.delete("/dordantuserid/:id", DordantDelitem)
router.get('/dordantsingle/:id' , Dordantsingl)

router.get("/africauser", AfricaDAta)
router.get("/africafreedelivery", AfricaFree)
router.delete("/africauserid/:id", AfricaDelitem)
router.get('/africasingle/:id' , Africasingl)

router.get("/fathersdayuser", FathersdayDAta)
router.get("/fathersdayfreedelivery", FathersdayFree)
router.delete("/fathersdayuserid/:id", FathersdayDelitem)
router.get('/fathersdaysingle/:id' , Fathersdaysingl)

router.get("/frammirroruser", FrammirrorDAta)
router.get("/frammirrorfreedelivery", FrammirrorFree)
router.delete("/frammirroruserid/:id", FrammirrorDelitem)
router.get('/frammirrorsingle/:id' , Frammirrorsingl)

router.get("/giftwarehuser", GiftwarehDAta)
router.get("/giftwarehfreedelivery", GiftwarehFree)
router.delete("/giftwarehuserid/:id", GiftwarehDelitem)
router.get('/giftwarehsingle/:id' , Giftwarehsingl)

router.get("/incenseuser", IncenseDAta)
router.get("/incensefreedelivery", IncenseFree)
router.delete("/incenseuserid/:id", IncenseDelitem)
router.get('/incensesingle/:id' , Incensesingl)

router.get("/souvenirsuser", SouvenirsDAta)
router.get("/souvenirsfreedelivery", SouvenirsFree)
router.delete("/souvenirsuserid/:id", SouvenirsDelitem)
router.get('/souvenirssingle/:id' , Souvenirssingl)

router.get("/weddinguser", WeddingDAta)
router.get("/weddingfreedelivery", WeddingFree)
router.delete("/weddinguserid/:id", WeddingDelitem)
router.get('/weddingsingle/:id' , Weddingsingl) 

router.get("/garlanduser", GarlandDAta)
router.get("/garlandfreedelivery", GarlandFree)
router.delete("/garlanduserid/:id", GarlandDelitem)
router.get('/garlandsingle/:id' , Garlandsingl) 

router.get("/singlestemuser", SinglestemDAta)
router.get("/singlestemfreedelivery", SinglestemFree)
router.delete("/singlestemuserid/:id", SinglestemDelitem)
router.get('/singlestemsingle/:id' , Singlestemsingl) 

router.get("/werathsuser", WerathsDAta)
router.get("/werathsfreedelivery", WerathsFree)
router.delete("/werathsuserid/:id", WerathsDelitem)
router.get('/werathssingle/:id' , Werathssingl) 

router.get("/diariesuser", DiariesDAta)
router.get("/diariesfreedelivery", DiariesFree)
router.delete("/diariesuserid/:id", DiariesDelitem)
router.get('/diariessingle/:id' , Diariessingl) 

router.get("/kidssuser", KidsDAta)
router.get("/kidssfreedelivery", KidsFree)
router.delete("/kidssuserid/:id", KidsDelitem)
router.get('/kidsssingle/:id' , Kidssingl) 

router.get("/mailinguser", MailingDAta)
router.get("/mailingfreedelivery", MailingFree)
router.delete("/mailinguserid/:id", MailingDelitem)
router.get('/mailingsingle/:id' , Mailingsingl) 

router.get("/officeuser", OfficeDAta)
router.get("/officefreedelivery", OfficeFree)
router.delete("/officeuserid/:id", OfficeDelitem)
router.get('/officesingle/:id' , Officesingl) 

router.get("/curtainsuser", CurtainsDAta)
router.get("/curtainsfreedelivery", CurtainsFree)
router.delete("/curtainsuserid/:id", CurtainsDelitem)
router.get('/curtainssingle/:id' , Curtainssingl) 

router.get("/tablecoveruser", TablecoverDAta)
router.get("/tablecoverfreedelivery", TablecoverFree)
router.delete("/tablecoveruserid/:id", TablecoverDelitem)
router.get('/tablecoversingle/:id' , Tablecoversingl) 

router.get("/teatoweluser", TeatowelDAta)
router.get("/teatowelfreedelivery", TeatowelFree)
router.delete("/teatoweluserid/:id", TeatowelDelitem)
router.get('/teatowelsingle/:id' , Teatowelsingl) 

router.get("/towelaccessoriesuser", TowelsaccDAta)
router.get("/towelaccessoriesfreedelivery", TowelsaccFree)
router.delete("/towelaccessoriesuserid/:id", TowelsaccDelitem)
router.get('/towelaccessoriessingle/:id' , Towelsaccsingl) 

router.get("/melaminuser", MelaminDAta)
router.get("/melaminfreedelivery", MelaminFree)
router.delete("/melaminuserid/:id", MelaminDelitem)
router.get('/melaminsingle/:id' , Melaminsingl) 

router.get("/plasticbathroomuser", PlasticbathroomDAta)
router.get("/plasticbathroomfreedelivery", PlasticbathroomFree)
router.delete("/plasticbathroomuserid/:id", PlasticbathroomDelitem)
router.get('/plasticbathroomsingle/:id' , Plasticbathroomsingl) 

router.get("/plasticcabnituser", PlasticcabnitDAta)
router.get("/plasticcabnitfreedelivery", PlasticcabnitFree)
router.delete("/plasticcabnituserid/:id", PlasticcabnitDelitem)
router.get('/plasticcabnitsingle/:id' , Plasticcabnitsingl) 

router.get("/healthcareeuser", HealthcareeDAta)
router.get("/healthcareefreedelivery", HealthcareeFree)
router.delete("/healthcareeuserid/:id", HealthcareeDelitem)
router.get('/healthcareesingle/:id' , Healthcareesingl) 

router.get("/handwashuser", HandwashDAta)
router.get("/handwashfreedelivery", HandwashFree)
router.delete("/handwashuserid/:id", HandwashDelitem)
router.get('/handwashsingle/:id' , Handwashsingl) 

router.get("/drinkingglassuser", DrinkingglassDAta)
router.get("/drinkingglassfreedelivery", DrinkingglassFree)
router.delete("/drinkingglassuserid/:id", DrinkingglassDelitem)
router.get('/drinkingglasssingle/:id' , Drinkingglasssingl) 

router.get("/glasstablewaeruser", GlasstablewearDAta)
router.get("/glasstablewaerfreedelivery", GlasstablewearFree)
router.delete("/glasstablewaeruserid/:id", GlasstablewearDelitem)
router.get('/glasstablewaersingle/:id' , Glasstablewearsingl)

router.get("/homebakinguser", HomebakingDAta)
router.get("/homebakingfreedelivery", HomebakingFree)
router.delete("/homebakinguserid/:id", HomebakingDelitem)
router.get('/homebakingsingle/:id' , Homebakingsingl)

router.get("/mugcupuser", MugcupsDAta)
router.get("/mugcupfreedelivery", MugcupsFree)
router.delete("/mugcupuserid/:id", MugcupsDelitem)
router.get('/mugcupsingle/:id' , Mugcupssingl)

router.get("/storageaccessuser", StorageaccessoriesDAta)
router.get("/storageaccessfreedelivery", StorageaccessoriesFree)
router.delete("/storageaccessuserid/:id", StorageaccessoriesDelitem)
router.get('/storageaccesssingle/:id' , Storageaccessoriessingl)

router.get("/metalbuckuser", MetalbuckDAta)
router.get("/metalbuckfreedelivery", MetalbuckFree)
router.delete("/metalbuckuserid/:id", MetalbuckDelitem)
router.get('/metalbucksingle/:id' , Metalbucksingl)

router.get("/hotwateruser", HotwaterrDAta)
router.get("/hotwaterfreedelivery", HotwaterrFree)
router.delete("/hotwateruserid/:id", HotwaterrDelitem)
router.get('/hotwatersingle/:id' , Hotwaterrsingl)

router.get("/picnicuser", PicnicDAta)
router.get("/picnicfreedelivery", PicnicFree)
router.delete("/picnicuserid/:id", PicnicDelitem)
router.get('/picnicsingle/:id' , Picnicsingl)

router.get("/sportbotteluser", SportsbottDAta)
router.get("/sportbottelfreedelivery", SportsbottFree)
router.delete("/sportbotteluserid/:id", SportsbottDelitem)
router.get('/sportbottelsingle/:id' , Sportsbottsingl)

router.get("/umbrellauser", UmbrellaDAta)
router.get("/umbrellafreedelivery", UmbrellaFree)
router.delete("/umbrellauserid/:id", UmbrellaDelitem)
router.get('/umbrellasingle/:id' , Umbrellasingl)

router.get("/umbrellauser", UmbrellaDAta)
router.get("/umbrellafreedelivery", UmbrellaFree)
router.delete("/umbrellauserid/:id", UmbrellaDelitem)
router.get('/umbrellasingle/:id' , Umbrellasingl)

router.get("/umbrella2user", Umbrella2DAta)
router.get("/umbrella2freedelivery", Umbrella2Free)
router.delete("/umbrella2userid/:id", Umbrella2Delitem)
router.get('/umbrella2single/:id' , Umbrella2singl)

router.get("/crokeryuser", CrokeryDAta)
router.get("/crokeryfreedelivery", CrokeryFree)
router.delete("/crokeryuserid/:id", CrokeryDelitem)
router.get('/crokerysingle/:id' , Crokerysingl)

router.get("/glassdecorativeuser", GlassdecoDAta)
router.get("/glassdecorativefreedelivery", GlassdecoFree)
router.delete("/glassdecorativeuserid/:id", GlassdecoDelitem)
router.get('/glassdecorativesingle/:id' , Glassdecosingl)

router.get("/glasstumbleruser", GlasstumblerDAta)
router.get("/glasstumblerfreedelivery", GlasstumblerFree)
router.delete("/glasstumbleruserid/:id", GlasstumblerDelitem)
router.get('/glasstumblersingle/:id' , Glasstumblersingl) 

router.get("/glassvassuser", GlassvassDAta)
router.get("/glassvassfreedelivery", GlassvassFree)
router.delete("/glassvassuserid/:id", GlassvassDelitem)
router.get('/glassvasssingle/:id' , Glassvasssingl) 

router.get("/glassstorageuser", GlassstorageDAta)
router.get("/glassstoragefreedelivery", GlassstorageFree)
router.delete("/glassstorageuserid/:id", GlassstorageDelitem)
router.get('/glassstoragesingle/:id' , Glassstoragesingl) 

router.get("/glasstablewareuser", GlasstablewareDAta)
router.get("/glasstablewarefreedelivery", GlasstablewareFree)
router.delete("/glasstablewareuserid/:id", GlasstablewareDelitem)
router.get('/glasstablewaresingle/:id' , Glasstablewaresingl) 

router.get("/pyrexuser", PyrexDAta)
router.get("/pyrexfreedelivery", PyrexFree)
router.delete("/pyrexuserid/:id", PyrexDelitem)
router.get('/pyrexsingle/:id' , Pyrexsingl) 

router.get("/klineruser", KlinerDAta)
router.get("/klinerfreedelivery", KlinerFree)
router.delete("/klineruserid/:id", KlinerDelitem)
router.get('/klinersingle/:id' , Klinersingl) 

router.get("/eleaccessoriesuser", ElectricalaccDAta)
router.get("/eleaccessoriesfreedelivery", ElectricalaccFree)
router.delete("/eleaccessoriesuserid/:id", ElectricalaccDelitem)
router.get('/eleaccessoriessingle/:id' , Electricalaccsingl) 

router.get("/doorbeelsuser", DoorbeelsDAta)
router.get("/doorbeelsfreedelivery", DoorbeelsFree)
router.delete("/doorbeelsuserid/:id", DoorbeelsDelitem)
router.get('/doorbeelssingle/:id' , Doorbeelssingl) 

router.get("/ironeleuser", IroneleDAta)
router.get("/ironelefreedelivery", IroneleFree)
router.delete("/ironeleuserid/:id", IroneleDelitem)
router.get('/ironelesingle/:id' , Ironelesingl) 

router.get("/earephoneuser", EarephoneDAta)
router.get("/earephonefreedelivery", EarephoneFree)
router.delete("/earephoneuserid/:id", EarephoneDelitem)
router.get('/earephonesingle/:id' , Earephonesingl) 

router.get("/hairbodyuser", HairbodyDAta)
router.get("/hairbodyfreedelivery", HairbodyFree)
router.delete("/hairbodyuserid/:id", HairbodyDelitem)
router.get('/hairbodysingle/:id' , Hairbodysingl) 

router.get("/birthdaybadgeuser", BirthdaybannaerDAta)
router.get("/birthdaybadgefreedelivery", BirthdaybannaerFree)
router.delete("/birthdaybadgeuserid/:id", BirthdaybannaerDelitem)
router.get('/birthdaybadgesingle/:id' , Birthdaybannaersingl) 
export default router