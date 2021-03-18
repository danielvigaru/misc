@echo off
setlocal enabledelayedexpansion

@REM initialising number of deleted NEFs to 0
SET /A CNEF=0 
@REM initialising number of deleted DNGs to 0
SET /A CDNG=0
@REM initialising number of deleted XMPs to 0
SET /A CXMP=0

@REM for every NEF in the current 
@REM folder check for a corresponding 
@REM JPG, if not found, delete NEF
FOR %%N IN (*.NEF) DO (
	SET PNEF=%%N
	SET PJPG=!PNEF:NEF=JPG!
	IF NOT EXIST "!PJPG!" ( 
		RECYCLE /F "%%N"
		ECHO !PNEF! DELETED
		SET /A CNEF+=1
	)
)

@REM for every DNG in the current 
@REM folder check for a corresponding 
@REM JPG, if not found, delete DNG
FOR %%N IN (*.DNG) DO (
	SET PDNG=%%N
	SET PJPG=!PDNG:DNG=JPG!
	IF NOT EXIST "!PJPG!" ( 
		RECYCLE /F "!PDNG!"
		ECHO !PDNG! DELETED
		SET /A CDNG+=1
	)
)

@REM for every XMP in the current f
@REM older check for a corresponding 
@REM NEF, if not found, delete XMP
FOR %%X IN (*.xmp) DO (
	SET PXMP=%%X
	SET PNEF=!PXMP:xmp=NEF!	
	IF NOT EXIST "!PNEF!" ( 
		RECYCLE /F "%%X"
		ECHO !PXMP! DELETED
		SET /A CXMP+=1
	)
)

ECHO .
ECHO .
ECHO .
ECHO DNG FILES DELETED: !CDNG!
ECHO NEF FILES DELETED: !CNEF!
ECHO XMP FILES DELETED: !CXMP!
PAUSE