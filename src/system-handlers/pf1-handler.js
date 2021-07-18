import { nameConversion } from "../item-sheet-handlers/name-conversions.js";

export default class Pf1Handler {
    constructor(message) {
        const item = message?.itemSource;
        const actor = item?.options?.actor || item?.actor;
        const tokenId = message.data.speaker.token;  
        if (!item || !actor) {
            return;
        }

        this._item = item;
        this._actor = actor;    
        this._actorToken = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        this._allTargets = Array.from(message.user.targets);

        this._itemName = item.name?.toLowerCase();

        // getting flag data from Animation Tab
        this._flags = item?.data?.flags?.autoanimations ?? "";;
        // 
        this._animLevel = this._flags.animLevel ?? false;
        this._animColor = this._flags?.color?.toLowerCase() ?? "";
        this._animName = this._flags.animName?.toLowerCase() ?? "";
        this._explodeColor = this._flags.explodeColor?.toLowerCase() ?? "";
        this._explodeDelay = this._flags.explodeDelay ?? 0;
        this._exAnimLevel = this._flags.exAnimLevel ?? false;
        this._impactVar = this._flags.impactVar ?? "";
        this._explodeRadius = this._flags.explodeRadius ?? 10;
        this._explodeVariant = this._flags.explodeVariant?.toLowerCase() ?? "";
        this._animExLoop = this._flags.explodeLoop ?? "";
        this._animType = this._flags.animType?.toLowerCase() ?? "";
        this._animKill = this._flags.killAnim;
        this._animOverride = this._flags.override;
        this._explosion = this._flags.explosion;
        this._dtvar = this._flags.dtvar?.toLowerCase() ?? "";
        this._selfRadius = this._flags.selfRadius ?? "";
        this._animTint = this._flags.animTint ?? "";
        this._auraOpacity = this._flags.auraOpacity ?? "";
        this._ctaOption = this._flags.ctaOption ?? "";
        this._hmAnim = this._flags.hmAnim ?? "";
        this._uaStrikeType = this._flags.uaStrikeType ?? "";
        this._teleDist = this._flags.teleDist ?? "";
        this._spellVar = this._flags.spellVar ?? "";
        this._bardTarget = this._flags.bards?.bardTarget ?? true;
        this._bardSelf = this._flags.bards?.bardSelf ?? true;
        this._bardAnim = this._flags.bards?.bardAnim ?? "";
        this._bards = this._flags.bards ?? "";
        this._allSounds = this._flags.allSounds ?? "";
        this._itemSound = this._flags.allSounds?.item?.enableAudio ?? false;
        this._explodeSound = this._flags.allSounds?.explosion?.audioExplodeEnabled ?? false;
        this._spellLoops = this._flags.spellOptions?.spellLoops ?? 1;
        this._divineSmite = this._flags.divineSmite ?? "";
        this._rangedOptions = this._flags.rangedOptions ?? "";
        this._animLoops = this._flags.options?.loops ?? 1;
        this._loopDelay = this._flags.options?.loopDelay ?? 250;
        this._scale = this._flags.options?.scale ?? 1;
        this._templates = this._flags.templates ?? "";
        this._templatePersist = this._flags.templates?.persistent ?? false;
        this._templateOpacity = this._flags.templates?.opacity ?? 0.75;

        this._sourceToken = this.flags.sourceToken ?? "";
        this._sourceEnable = this._sourceToken.enable ?? false;
        this._sourceLevel = this._sourceToken.animLevel ?? false;
        this._sourceName = this._sourceToken.name ?? "";
        this._sourceColor = this._sourceToken.color ?? "";
        this._sourceCustomEnable = this._sourceToken.enableCustom ?? false;
        this._sourceCustomPath = this._sourceToken.customPath ?? "";
        this._sourceLoops = this._sourceToken.loops ?? 1,
        this._sourceLoopDelay = this._sourceToken.loopDelay ?? 250;
        this._sourceScale = this._sourceToken.scale ?? 1,
        this._sourceDelay = this._sourceToken.delayAfter ?? 500,
        this._sourceVariant = this._sourceToken.variant ?? "",

        this._targetToken = this.flags.targetToken ?? "";
        this._targetEnable = this._targetToken.enable ?? false;
        this._targetLevel = this._targetToken.animLevel ?? false;
        this._targetName = this._targetToken.name ?? "";
        this._targetColor = this._targetToken.color ?? "";
        this._targetCustomEnable = this._targetToken.enableCustom ?? false;
        this._targetCustomPath = this._targetToken.customPath ?? "";
        this._targetLoops = this._targetToken.loops ?? 1,
        this._targetLoopDelay = this._targetToken.loopDelay ?? 250;
        this._targetScale = this._targetToken.scale ?? 1,
        this._targetDelay = this._targetToken.delayAfter ?? 500,
        this._targetVariant = this._targetToken.variant ?? "",

        //console.log(this._animName);
        this._animNameFinal;
        switch (true) {
            case((!this._animOverride) || ((this._animOverride) && (this._animName === ``))):
                this._animNameFinal = this._itemName;
                break;
            default:
                this._animNameFinal = this._animName;
                break;
        }

        if (!this._flags.defaults) {
            this._convert = nameConversion(this._animNameFinal)
            this._convertName = this._convert[0]
            this._item.setFlag("autoanimations", "defaults.name", this._convertName)
            this._defaultColor = this._convert[1]
            this._item.setFlag("autoanimations", "defaults.color", this._defaultColor)
        } else {
            this._convertName = this._flags.defaults.name;
            this._defaultColor = this._flags.defaults.color;
        }

    }

    get convertedName() {return this._convertName;}
    
    get itemMacro() {return this._itemMacro;}

    get playOnMiss() {return false}

    get actor() {return this._actor;}

    get reachCheck() {
        let reach = 0;

        if (this._item.data.data?.range?.units?.toLowerCase() === "reach") {
            reach =+ 5;
        }
        return reach;
    }

    get item() {return this._item}
    get actorToken() {return this._actorToken;}
    get allTargets() {return this._allTargets;}
    get hitTargetsId() {return this._hitTargetsId;}
    get targetsId() {return this._targetsId;}

    get targetAssistant() {return this._targetAssistant;}

    get isValid() {return !!(this._item && this._actor);}
    get itemType() {return this._item.data.type.toLowerCase();}

    get checkSaves() {return}

    get animKill() {return this._animKill;}
    get animOverride() {return this._animOverride;}
    get animType() {return this._animType;}
    get color() {return this._animColor;}
    get defaultColor() {return this._defaultColor;}
    get animName() {return this._animNameFinal;}

    get explosion() {return this._explosion;}
    get impactVar() {return this._impactVar;}
    get explosionColor() {return this._explodeColor;}
    get explosionRadius() {return this._explodeRadius;}
    get explosionVariant() {return this._explodeVariant;}
    get explosionDelay() {return this._explodeDelay;}
    get explosionLevel() {return this._exAnimLevel;}
    get explosionLoops() {return this._animExLoop;}

    get dtvar() {return this._dtvar;}
    get selfRadius() {return this._selfRadius;}

    get animTint() {return this._animTint;}
    get auraOpacity() {return this._auraOpacity;}
    get ctaOption() {return this._ctaOption;}

    get hmAnim() {return this._hmAnim;}
    get uaStrikeType() {return this._uaStrikeType;}
    get teleRange() {return this._teleDist;}
    get spellVariant() {return this._spellVar;}

    get bardTarget() {return this._bardTarget;}
    get bardSelf() {return this._bardSelf;}
    get bardAnim() {return this._bardAnim;}
    get bards() {return this._bards;}

    get allSounds() {return this._allSounds;}
    get itemSound() {return this._itemSound;}
    get explodeSound() {return this._explodeSound}

    get spellLoops() {return this._spellLoops;}
    get divineSmite() {return this._divineSmite;}
    get autoDamage() {return game.user.isGM ? this._gmAD : this._userAD;}
    get flags() {return this._flags;}

    get rangedOptions() {return this._rangedOptions;}
    get animationLoops() {return this._animLoops;}
    get loopDelay() {return this._loopDelay;}
    get scale() {return this._scale;}
    get animLevel() {return this._animLevel;}

    get templates() {return this._templates;}
    get templatePersist() {return this._templatePersist}
    get templateOpacity() {return this._templateOpacity}

    get sourceEnable() {return this._sourceEnable;}
    get sourceLevel() {return this._sourceLevel;}
    get sourceName() {return this._sourceName;}
    get sourceColor() {return this._sourceColor;}
    get sourceCustomEnable() {return this._sourceCustomEnable;}
    get sourceCustomPath() {return this._sourceCustomPath;}
    get sourceLoops() {return this._sourceLoops;}
    get sourceLoopDelay() {return this._sourceLoopDelay}
    get sourceScale() {return this._sourceScale;}
    get sourceDelay() {return this._sourceDelay;}
    get sourceVariant() {return this._sourceVariant;}

    get targetEnable() {return this._targetEnable;}
    get targetLevel() {return this._targetLevel;}
    get targetName() {return this._targetName;}
    get targetColor() {return this._targetColor;}
    get targetCustomEnable() {return this._targetCustomEnable;}
    get targetCustomPath() {return this._targetCustomPath;}
    get targetLoops() {return this._targetLoops;}
    get targetLoopDelay() {return this._targetLoopDelay}
    get targetScale() {return this._targetScale;}
    get targetDelay() {return this._targetDelay;}
    get targetVariant() { return this._targetVariant;}

    getDistanceTo(target) {
        const scene = game.scenes.active;
        const gridSize = scene.data.grid;

        const left = (token) => token.data.x;
        const right = (token) => token.data.x + token.w;
        const top = (token) => token.data.y;
        const bottom = (token) => token.data.y + token.h;

        const isLeftOf = right(this._actorToken) <= left(target);
        const isRightOf = left(this._actorToken) >= right(target);
        const isAbove = bottom(this._actorToken) <= top(target);
        const isBelow = top(this._actorToken) >= bottom(target);

        let x1 = left(this._actorToken);
        let x2 = left(target);
        let y1 = top(this._actorToken);
        let y2 = top(target);

        if (isLeftOf) {
            x1 += (this._actorToken.data.width - 1) * gridSize;
        }
        else if (isRightOf) {
            x2 += (target.data.width - 1) * gridSize;
        }

        if (isAbove) {
            y1 += (this._actorToken.data.height - 1) * gridSize;
        }
        else if (isBelow) {
            y2 += (target.data.height - 1) * gridSize;
        }

        const ray = new Ray({ x: x1, y: y1 }, { x: x2, y: y2 });
        const distance = canvas.grid.grid.measureDistances([{ray}], {gridSpaces: true})[0];
        return distance;
    }

    itemNameIncludes() {
        return [...arguments].every(a => this._animNameFinal?.includes(a));
    }
    itemTypeIncludes() {
        return [...arguments].every(a => this._itemType?.includes(a));
    }
}
